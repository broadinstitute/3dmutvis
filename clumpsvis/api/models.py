# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.

from __future__ import unicode_literals
from django.db import models

class Mutations(models.Model):
    id = models.IntegerField(primary_key=True)
    patient = models.CharField(max_length=32, blank=True)
    ttype = models.CharField(max_length=32, blank=True)
    chr = models.IntegerField(null=True, blank=True)
    chrpos = models.BigIntegerField(null=True, blank=True)
    refbase = models.CharField(max_length=1, blank=True)
    newbase = models.CharField(max_length=1, blank=True)
    u1 = models.CharField(max_length=32, blank=True)
    aachange = models.CharField(max_length=8, blank=True)
    aachangepos = models.IntegerField(null=True, blank=True)
    class Meta:
        db_table = u'mutations'
        managed = False

class Uniprot(models.Model):
    u1 = models.CharField(max_length=32, primary_key=True)
    entry = models.CharField(max_length=16, blank=True)
    longname = models.CharField(max_length=128, blank=True)
    aaseq = models.TextField(blank=True)
    aalen = models.IntegerField(null=True, blank=True)
    class Meta:
        db_table = u'uniprot'
        managed = False

class Uniprot2PdbFilt(models.Model):
    rowid = models.IntegerField(primary_key=True)
    u1 = models.CharField(max_length=32, blank=True)
    u2 = models.CharField(max_length=32, blank=True)
    pdbchain = models.CharField(max_length=6, blank=True)
    mapstat = models.TextField(blank=True)
    resmap = models.TextField(blank=True)
    mapfirst = models.IntegerField(null=True, blank=True)
    maplast = models.IntegerField(null=True, blank=True)
    class Meta:
        db_table = u'uniprot2pdb_filt'
        managed = False

class Uniprot2PdbAll(models.Model):
    rowid = models.IntegerField(primary_key=True)
    u1 = models.CharField(max_length=32, blank=True)
    u2 = models.CharField(max_length=32, blank=True)
    pdbchain = models.CharField(max_length=8, blank=True)
    mapstat = models.TextField(blank=True)
    resmap = models.TextField(blank=True)
    mapfirst = models.IntegerField(null=True, blank=True)
    maplast = models.IntegerField(null=True, blank=True)
    class Meta:
        db_table = u'uniprot2pdb_all'
        managed = False

class Pfam(models.Model):
    pfamid = models.CharField(max_length=7, primary_key=True)
    shortname = models.CharField(max_length=16, blank=True)
    longname = models.CharField(max_length=128, blank=True)
    class Meta:
        db_table = u'pfam'
        managed = False

class Proteindomains(models.Model):
    id = models.IntegerField(primary_key=True)
    u1 = models.CharField(max_length=32, blank=True)
    source = models.CharField(max_length=8, blank=True)
    extid = models.CharField(max_length=16, blank=True)
    sstart = models.IntegerField(null=True, blank=True)
    send = models.IntegerField(null=True, blank=True)
    class Meta:
        db_table = u'proteindomains'
        managed = False

class Phosphositeplus(models.Model):
    id = models.IntegerField(primary_key=True)
    u1 = models.CharField(max_length=32, blank=True)
    aapos = models.IntegerField(null=True, blank=True)
    residue = models.CharField(max_length=1, blank=True)
    modtype = models.CharField(max_length=4, blank=True)
    class Meta:
        db_table = u'phosphositeplus'
        managed = False
