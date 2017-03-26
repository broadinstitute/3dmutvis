import flask
from flask import Flask, jsonify
from flask_restplus import Resource, Api
import psycopg2
import pandas as pd

app = Flask(__name__)
api = Api(app)

def get_db_conn():
  conn = getattr(flask.g, '_database', None)
  if conn is None:
	conn = flask.g._database = psycopg2.connect("dbname='clumps' host='localhost'")
  return conn


# endpoints
@api.route('/genes/<string:gene>')
class GeneSymbols(Resource):
    def get(self, gene):
        db = get_db_conn()
        SQL = '''SELECT * FROM hgnc where (symbol ILIKE '{}%' OR previous_symbols ILIKE '%{}%'  OR synonyms ILIKE '%{}%');'''
        data = pd.read_sql(SQL.format(gene, gene, gene), db)
        r = data.to_json(orient = 'records')
        return flask.Response(r, mimetype='application/json')

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
    app.run(debug=True, host = '0.0.0.0', port = 5000)
