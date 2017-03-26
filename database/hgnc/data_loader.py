import psycopg2 as pg
from sqlalchemy import create_engine
import pandas as pd

def clean_data(data):
    data.columns = ['symbol', 'name', 'previous_symbols', 'synonyms', 'entrezid', 'uniprot_id']
    data = data.dropna(subset = ['symbol','uniprot_id'])
    return data

def create_table(data, engine):
    data.to_sql('hgnc', if_exists = 'replace', con = engine)
    engine.execute('CREATE INDEX hgnc_symbol_idx ON hgnc (symbol)')

    
if __name__=='__main__':

    engine = create_engine('postgresql://localhost:5432/clumps')

    hgnc = pd.read_table('./download.txt')
    hgnc = clean_data(hgnc)
    
    create_table(hgnc, engine)