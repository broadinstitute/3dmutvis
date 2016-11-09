from rest_framework import serializers
from api.models import Mutations, Uniprot, Uniprot2PdbFilt, Uniprot2PdbAll, Pfam, Proteindomains, Phosphositeplus

class MutationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mutations
        fields = ('id','patient','ttype','chr','chrpos','refbase','newbase','u1','aachange','aachangepos')

class UniprotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uniprot
        fields = ('u1','entry','longname','aaseq','aalen')

class Uniprot2PdbFiltSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uniprot2PdbFilt
        fields = ('rowid','u1','u2','pdbchain','mapstat','resmap','mapfirst','maplast')

class Uniprot2PdbAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uniprot2PdbAll
        fields = ('rowid','u1','u2','pdbchain','mapstat','resmap','mapfirst','maplast')

class PfamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pfam
        fields = ('pfamid','shortname','longname')

class ProteindomainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proteindomains
        fields = ('id','u1','source','extid','sstart','send')

class PhosphositeplusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phosphositeplus
        fields = ('id','u1','aapos','residue','modtype')
