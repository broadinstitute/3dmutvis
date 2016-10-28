import psycopg2

from gzip import GzipFile


PDB2UNIPROT_FILT = '../clumps2/res/huniprot2pdb.run6.filt.txt.gz'
PDB2UNIPROT_ALL = '../clumps2/res/huniprot2pdb.run6.txt.gz'

con = psycopg2.connect('dbname=clumps')
cur = con.cursor()


####  UNIPROT

if 0:
    cur.execute("drop table if exists uniprot")
    cur.execute("create table uniprot (u1 varchar(32) primary key, entry varchar(16), longname varchar(128), aaseq text, aalen int)")
    fi = GzipFile('dat/uniprot/uniprot_sprot.fasta.gz')
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

if 0:
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


if 0:
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

if 0:
    cur.execute("drop table if exists pfam")
    cur.execute("create table pfam (id char(7) primary key, shortname varchar(16), longname varchar(128))")
    #cur.execute("create table interpro (id varchar(16) primary key, shortname varchar(16), longname varchar(128))")
    id2names = {}
    fi = GzipFile('dat/pfam/Pfam-A.clans.tsv.gz')
    while 1:
        l = fi.readline()
        if not l:
            break
        l = l.rstrip('\n').split('\t')
        cur.execute("insert into pfam (id, shortname, longname) values ('%s','%s','%s')" % (l[0],l[3],l[4].replace("'", "")))
    fi.close()

if 0:
    cur.execute("drop table if exists proteindomains")
    cur.execute("create table proteindomains (u1 varchar(32), source varchar(8), extid varchar(16), sstart int, send int)")
    cur.execute("select u1, true from uniprot")
    human_u1 = dict(cur.fetchall())
    fi = GzipFile('dat/pfam/Pfam-A.regions.uniprot.tsv.gz')
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
if 0:
    cur.execute("drop table if exists muts5k")
    cur.execute("create table muts5k (patient varchar(32), chr int, pos bigint, refbase char(1), newbase char(1), u1 varcha, )")





con.commit()
cur.close()
con.close()
