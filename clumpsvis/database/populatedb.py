"""
This script downloads open-access data and using that data and some project-specific datasets, populates postgresql database that's needed for 3dMutVis.
There should be a postgresql database acccessible on server $PGHOST, port $PGPORT accessible by user $PGUSER with password $PGPASSWORD (all these are environment variables that should be set; otherwise, modify the psycopg2.connect() arguments below).
"""

import os.path
import psycopg2
import urllib2

from gzip import GzipFile


con = psycopg2.connect('dbname=clumps')
cur = con.cursor()

####  GET EXTERNAL DATA AND CONFIGURE PATHS

PDB2UNIPROT_FILT = 'data/uniprot2pdbmap/huniprot2pdb.run6.filt.txt.gz'
PDB2UNIPROT_ALL = 'data/uniprot2pdbmap/huniprot2pdb.run6.txt.gz'
MUTATIONS = 'data/mutations/pancan4700.v1f.oncotator.gp.gz'

for fn in [PDB2UNIPROT_FILT, PDB2UNIPROT_ALL, MUTATIONS]:
    if not os.path.exists(fn):
        raise Exception('You are missing essential datasets (%s) needed for populating the database. You can obtain them from https://drive.google.com/drive/folders/0B8m7y_bC59q8eFByVkVmQ1lMOFk?usp=sharing . Exiting.' % fn)

if not os.path.exists('data/uniprot/uniprot_sprot.fasta.gz'):
    fo = file('data/uniprot/uniprot_sprot.fasta.gz', 'w')
    fo.write(urllib2.urlopen('ftp://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.fasta.gz').read())
    fo.close()

for fn in ['Pfam-A.clans.tsv.gz', 'Pfam-A.regions.uniprot.tsv.gz']:
    if not os.path.exists('data/pfam/%s' % fn):
        fo = file('data/pfam/%s' % fn, 'w')
        fo.write(urllib2.urlopen('ftp://ftp.ebi.ac.uk/pub/databases/Pfam/current_release/%s' % fn).read())
        fo.close()


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


####  UNIPROT-PDB maps

if 1:
    cur.execute("drop table if exists pdb2uniprot_filt")
    cur.execute("create table pdb2uniprot_filt (u1 varchar(32), u2 varchar(32), pdbchain char(6), mapstat text, resmap text, rowid int primary key, mapfirst int, maplast int)")
    fi = GzipFile(PDB2UNIPROT_FILT)
    lc = 0
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        cur.execute("insert into pdb2uniprot_filt (u1, u2, pdbchain, mapstat, resmap, rowid, mapfirst, maplast) values ('%s', '%s', '%s', '%s', '%s', %d, %s, %s)" % tuple(l + [lc, l[4].split(':')[0], l[4].rsplit(' ',1)[-1].split(':')[0]]))
        lc += 1
    cur.execute("create index on pdb2uniprot_filt (u1,u2,pdbchain,mapfirst)")
    cur.execute("create index on pdb2uniprot_filt (u1)")


if 1:
    cur.execute("drop table if exists pdb2uniprot_all")
    cur.execute("create table pdb2uniprot_all (u1 varchar(32), u2 varchar(32), pdbchain varchar(8), mapstat text, resmap text, rowid int primary key, mapfirst int, maplast int)")
    fi = GzipFile(PDB2UNIPROT_ALL)
    lc = 0
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        cur.execute("insert into pdb2uniprot_all (u1, u2, pdbchain, mapstat, resmap, rowid, mapfirst, maplast) values ('%s', '%s', '%s', '%s', '%s', %d, %s, %s)" % tuple(l + [lc, l[4].split(':')[0], l[4].rsplit(' ',1)[-1].split(':')[0]]))
        lc += 1
    cur.execute("create index on pdb2uniprot_all (u1)")


####  2-D DOMAIN STRUCTURE

if 1:
    cur.execute("drop table if exists pfam")
    cur.execute("create table pfam (id char(7) primary key, shortname varchar(16), longname varchar(128))")
    #cur.execute("create table interpro (id varchar(16) primary key, shortname varchar(16), longname varchar(128))")
    id2names = {}
    fi = GzipFile('data/pfam/Pfam-A.clans.tsv.gz')
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        cur.execute("insert into pfam (id, shortname, longname) values ('%s','%s','%s')" % (l[0],l[3],l[4].replace("'", "")))
    fi.close()

if 1:
    cur.execute("drop table if exists proteindomains")
    cur.execute("create table proteindomains (u1 varchar(32), source varchar(8), extid varchar(16), sstart int, send int)")
    cur.execute("select u1, true from uniprot")
    human_u1 = dict(cur.fetchall())
    fi = GzipFile('data/pfam/Pfam-A.regions.uniprot.tsv.gz')
    x = fi.readline()
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        if l[0] not in human_u1:
            continue
        cur.execute("insert into proteindomains (u1, source, extid, sstart, send) values ('%s', 'pfam', '%s', %s, %s)" % (l[0],l[4],l[5],l[6]))
    cur.execute("create index on proteindomains (u1)")
    

####  MUTATIONS
if 1:
    cur.execute("drop table if exists mutations")
    cur.execute("create table mutations (patient varchar(32), ttype varchar(32), chr int, chrpos bigint, refbase char(1), newbase char(1), u1 varchar(32), aachange varchar(8), aachangepos int)")
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
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        if not l[iProtchange]:
            continue
        if l[iRefbase] not in dnalib or l[iNewbase] not in dnalib:
            continue
        for u1_aachange in l[iProtchange].split('; '):
            u1,aachange = u1_aachange.split(':')
            aachangepos = int(aachange[1:-1])
            cur.execute("insert into mutations (patient, ttype, chr, chrpos, refbase, newbase, u1, aachange, aachangepos) values ('%s', '%s', %s, %s, '%s', '%s', '%s', '%s', %d)" % (l[iPat], l[iTtype], l[iChr], l[iChrpos], l[iRefbase], l[iNewbase], u1, aachange, aachangepos))
    cur.execute("create index on mutations (u1)")
    cur.execute("create index on mutations (ttype)")




con.commit()
cur.close()
con.close()
