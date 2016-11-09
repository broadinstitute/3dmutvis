"""
This script downloads open-access data and using that data plus some project-specific datasets, populates a postgresql database that's needed for 3dMutVis.
There should be a postgresql database on server $PGHOST, port $PGPORT accessible by user $PGUSER with password $PGPASSWORD (all these are environment variables that should be set; otherwise, modify the psycopg2.connect() arguments below).
"""

import os.path
import psycopg2
import urllib2

from gzip import GzipFile


con = psycopg2.connect('dbname=clumps')
cur = con.cursor()

####  GET EXTERNAL DATA AND CONFIGURE PATHS

UNIPROT2PDB_FILT = 'data/uniprot2pdbmap/huniprot2pdb.run6.filt.txt.gz'
UNIPROT2PDB_ALL = 'data/uniprot2pdbmap/huniprot2pdb.run6.txt.gz'
MUTATIONS = 'data/mutations/pancan4700.v1f.oncotator.gp.gz'

for fn in [UNIPROT2PDB_FILT, UNIPROT2PDB_ALL, MUTATIONS]:
    if not os.path.exists(fn):
        raise Exception('You are missing essential datasets (%s) needed for populating the postgresql database. You can obtain them from https://drive.google.com/drive/folders/0B8m7y_bC59q8eFByVkVmQ1lMOFk . Exiting.' % fn)

if not os.path.exists('data/uniprot/uniprot_sprot.fasta.gz'):
    print 'Fetching UniProt'
    fo = file('data/uniprot/uniprot_sprot.fasta.gz', 'w')
    fo.write(urllib2.urlopen('ftp://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.fasta.gz').read())
    fo.close()

for fn in ['Pfam-A.clans.tsv.gz', 'Pfam-A.regions.uniprot.tsv.gz']:
    if not os.path.exists('data/pfam/%s' % fn):
        print 'Fetching PFAM'
        fo = file('data/pfam/%s' % fn, 'w')
        fo.write(urllib2.urlopen('ftp://ftp.ebi.ac.uk/pub/databases/Pfam/current_release/%s' % fn).read())
        fo.close()

## optional PhosphoSitePlus data
PSPFILES = []
for fn in ['Acetylation_site_dataset.gz',
           'Methylation_site_dataset.gz',
           'O-GalNAc_site_dataset.gz',
           'O-GlcNAc_site_dataset.gz',
           'Phosphorylation_site_dataset.gz',
           'Sumoylation_site_dataset.gz',
           'Ubiquitination_site_dataset.gz']:
    if os.path.exists('data/phosphositeplus/%s' % fn):
        PSPFILES.append('data/phosphositeplus/%s' % fn)

if PSPFILES:
    print 'You have PhosphoSitePlus datasets; they will be added to the database.'

print 'Finished fetching public data.'

####  UNIPROT

if 1:
    cur.execute("drop table if exists uniprot")
    cur.execute("create table uniprot (u1 varchar(32) primary key, entry varchar(16), longname varchar(128), aaseq text, aalen int)")
    fi = GzipFile('data/uniprot/uniprot_sprot.fasta.gz')
    idline = None
    seq = ''
    while 1:
        l = fi.readline()
        if not l:
            i = idline.strip().split('|')
            u1 = i[1]
            entry, longname = i[2].split(' ', 1)
            if entry.endswith('_HUMAN'):
                longname = longname.split(' OS=')[0].replace("'", '')
                cur.execute("insert into uniprot (u1, entry, longname, aaseq, aalen) values ('%s', '%s', '%s', '%s', %d)" % (u1, entry, longname, seq, len(seq)))
            break
        if l.startswith('>'):
            if not idline:
                idline = l
                seq = ''
            i = idline.strip().split('|')
            u1 = i[1]
            entry, longname = i[2].split(' ', 1)
            if entry.endswith('_HUMAN'):
                longname = longname.split(' OS=')[0].replace("'", '')
                cur.execute("insert into uniprot (u1, entry, longname, aaseq, aalen) values ('%s', '%s', '%s', '%s', %d)" % (u1, entry, longname, seq, len(seq)))
            idline = l
            seq = ''
        else:
            seq += l.strip()
    con.commit()
    print 'Finished populating UniProt'


####  UNIPROT-PDB maps

if 1:
    cur.execute("drop table if exists uniprot2pdb_filt")
    cur.execute("create table uniprot2pdb_filt (rowid int primary key, u1 varchar(32), u2 varchar(32), pdbchain char(6), mapstat text, resmap text, mapfirst int, maplast int)")
    fi = GzipFile(UNIPROT2PDB_FILT)
    lc = 0
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        mapfirst = l[4].split(':')[0]
        maplast = l[4].rsplit(' ',1)[-1].split(':')[0]
        resmap = '{' + l[4].replace(' ', ',') + '}'
        cur.execute("insert into uniprot2pdb_filt (rowid, u1, u2, pdbchain, mapstat, resmap, mapfirst, maplast) values (%d, '%s', '%s', '%s', '%s', '%s', %s, %s)" % tuple([lc] + l[:4] + [resmap, mapfirst, maplast]))
        lc += 1
    cur.execute("create index on uniprot2pdb_filt (u1,u2,pdbchain,mapfirst)")
    cur.execute("create index on uniprot2pdb_filt (u1)")
    con.commit()
    print 'Finished populating uniprot2pdb_filt'


if 1:
    cur.execute("drop table if exists uniprot2pdb_all")
    cur.execute("create table uniprot2pdb_all (rowid int primary key, u1 varchar(32), u2 varchar(32), pdbchain varchar(8), mapstat text, resmap text, mapfirst int, maplast int)")
    fi = GzipFile(UNIPROT2PDB_ALL)
    lc = 0
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        cur.execute("insert into uniprot2pdb_all (rowid, u1, u2, pdbchain, mapstat, resmap, mapfirst, maplast) values (%d, '%s', '%s', '%s', '%s', '%s', %s, %s)" % tuple([lc] + l + [l[4].split(':')[0], l[4].rsplit(' ',1)[-1].split(':')[0]]))
        lc += 1
    cur.execute("create index on uniprot2pdb_all (u1)")
    con.commit()
    print 'Finished populating uniprot2pdb_all'


####  2-D DOMAIN STRUCTURE

if 1:
    cur.execute("drop table if exists pfam")
    cur.execute("create table pfam (pfamid char(7) primary key, shortname varchar(16), longname varchar(128))")
    #cur.execute("create table interpro (id varchar(16) primary key, shortname varchar(16), longname varchar(128))")
    id2names = {}
    fi = GzipFile('data/pfam/Pfam-A.clans.tsv.gz')
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        cur.execute("insert into pfam (pfamid, shortname, longname) values ('%s','%s','%s')" % (l[0],l[3],l[4].replace("'", "")))
    fi.close()
    cur.execute("drop table if exists proteindomains")
    cur.execute("create table proteindomains (id int primary key, u1 varchar(32), source varchar(8), extid varchar(16), sstart int, send int)")
    cur.execute("select u1, true from uniprot")
    human_u1 = dict(cur.fetchall())
    fi = GzipFile('data/pfam/Pfam-A.regions.uniprot.tsv.gz')
    x = fi.readline()
    lc = 0
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        if l[0] not in human_u1:
            continue
        cur.execute("insert into proteindomains (id, u1, source, extid, sstart, send) values (%d, '%s', 'pfam', '%s', %s, %s)" % (lc,l[0],l[4],l[5],l[6]))
        lc += 1
    cur.execute("create index on proteindomains (u1)")
    con.commit()
    print 'Finished populating Pfam'

####  MUTATIONS
if 1:
    cur.execute("drop table if exists mutations")
    cur.execute("create table mutations (id int primary key, patient varchar(32), ttype varchar(32), chr int, chrpos bigint, refbase char(1), newbase char(1), u1 varchar(32), aachange varchar(8), aachangepos int)")
    fi = GzipFile(MUTATIONS)
    hdr = fi.readline().strip().split('\t')
    ## get header indices
    iPat = hdr.index('patient')
    iTtype = hdr.index('ttype')
    iChr = hdr.index('chr')
    iChrpos = hdr.index('pos')
    iRefbase = hdr.index('refbase')
    iNewbase = hdr.index('newbase')
    iProtchange = hdr.index('uniprot_change')
    dnalib = set(['A','C','G','T'])
    lc = 0
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        if not l[iProtchange]:
            continue
        if l[iRefbase] not in dnalib or l[iNewbase] not in dnalib:
            continue
        if l[iChr] == 'X':
            chr = 23
        elif l[iChr] == 'Y':
            chr = 24
        elif l[iChr] == 'M':
            chr = 25
        else:
            chr = l[iChr]
        for u1_aachange in l[iProtchange].split('; '):
            u1,aachange = u1_aachange.split(':')
            aachangepos = int(aachange[1:-1])
            cur.execute("insert into mutations (id, patient, ttype, chr, chrpos, refbase, newbase, u1, aachange, aachangepos) values (%d, '%s', '%s', %s, %s, '%s', '%s', '%s', '%s', %d)" % (lc, l[iPat], l[iTtype], chr, l[iChrpos], l[iRefbase], l[iNewbase], u1, aachange, aachangepos))
            lc += 1
    cur.execute("create index on mutations (u1)")
    cur.execute("create index on mutations (ttype)")
    con.commit()
    print 'Finished populating mutations'


####  PHOSPHOSITEPLUS

if 1:
    cur.execute("drop table if exists phosphositeplus")
    cur.execute("create table phosphositeplus (id int primary key, u1 varchar(32), aapos int, residue char(1), modtype varchar(4))")
    lc = 0
    for fn in PSPFILES:
        fi = GzipFile(fn)
        hdr = ''
        cnt = 0
        while not hdr.startswith('GENE') and cnt < 20:
            hdr = fi.readline()
            cnt += 1
        if not hdr.startswith('GENE'):
            print 'WARNING: file %s not added to database due to unexpected header; edit populatedb.py to fix.' % fn
            continue
        hdr = hdr.strip().split('\t')
        iU1 = hdr.index('ACC_ID')
        iMod = hdr.index('MOD_RSD')
        iOrganism = hdr.index('ORGANISM')
        while 1:
            l = fi.readline()
            if not l:
                break
            l = l.rstrip('\n').split('\t')
            if l[iOrganism] != 'human':
                continue
            x = l[iMod]
            residue = x[0]
            aapos, modtype = x[1:].split('-')
            cur.execute("insert into phosphositeplus (id, u1, aapos, residue, modtype) values (%d, '%s', %s, '%s', '%s')" % (lc, l[iU1], aapos, residue, modtype))
            lc += 1
    cur.execute("create index on phosphositeplus (u1)")
    con.commit()
            

con.commit()
cur.close()
con.close()
