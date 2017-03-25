import psycopg2 as pg
import SQLAlchemy as sa
import pandas as pd

def clean_data(data):
    data.columns = ['symbol', 'name', 'status', 'previous', 'synonym', 'uniprot_id']
    data = data.query('status == "Approved"').dropna(subset = ['symbol','uniprot_id'])
    return data

if __name__=='__main__':
    conn = pg.connect(host = 'localhost', database = 'clumps')
    hgnc = pd.read_table('./download.txt')
    hgnc = clean_data(hgnc)
    hgnc.to_sql('hgnc', con = conn)