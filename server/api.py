from flask import Flask
from flask_restplus import Resource, Api

app = Flask(__name__)
api = Api(app)


# endpoints
@api.route('/genesymbols/<string:letters>')
class GeneSymbols(Resource):
    def get(self, letters):
        return [{'symbol':'KRAS','name':'Kann Richtig Abgehen. Super!'},{'symbol':'CDK2','name':'cyclin-dependent kinase 2'}]

@api.route('/aascores/<string:scoretype>')
class AAScores(Resource):
    def get(self, scoretype):
        return []

@api.route('/samplevalues/<string:valuetype>?params')
class SampleValues(Resource):
    def get(self, valuetypes, params):
        return []

@api.route('/sequence/<string:sequence>')
class Sequence(Resource):
    def get(self, sequence):
        return []

@api.route('/structure/<string:pdb>')
class Structure(Resource):
    def get(self, pdb):
        return []

@api.route('/domain/<string:pdb>')
class Domain(Resource):
    def get(self, pdb):
        return []

@api.route('/structuresequence/<string:uniprot>')
class StructureSequence(Resource):
    def get(self, uniprot):
        return []

@api.route('/mutations/<string:uniprot>')
class Mutations(Resource):
    def get(self, uniprot):
        return []

if __name__ == '__main__':
    app.run(debug=True)
