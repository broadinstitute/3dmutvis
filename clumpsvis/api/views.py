from django.shortcuts import render

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from api.models import Mutations, Uniprot, Uniprot2PdbFilt, Uniprot2PdbAll, Pfam, Proteindomains, Phosphositeplus
from api.serializers import MutationsSerializer, UniprotSerializer, Uniprot2PdbFiltSerializer, Uniprot2PdbAllSerializer, PfamSerializer, ProteindomainsSerializer, PhosphositeplusSerializer



# Create your views here.

def main(request):
	return render(request, 'index.html', {})

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def getModelByAttr(request, strmodel, attrname, attrval):
    #try:
    kwargs = {attrname:attrval}
    objs = eval(strmodel).objects.filter(**kwargs)
    #except:
    #    return HttpResponse(status=404)
    
    if request.method == 'GET':
        serializer = eval('%sSerializer' % strmodel)(objs, many=True)
        return JSONResponse(serializer.data)
