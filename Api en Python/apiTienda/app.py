from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import *

#Se crea el ojeto de tipo Flask
api = Flask(__name__)

#Se crea un objeto cors que permite que se pueda acceder desde cualquier sitio
cors = CORS()

#se crea la cadena de conexion a mysql
cadenaConexion = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"

api.config['SQLALCHEMY_DATABASE_URI'] = cadenaConexion

#se crea un objeto de tipo SqlAlchemy asociado a la aplicación Flask
db = SQLAlchemy(api)

#Importamos Todo lo que tenga el archivo routes.py
from routes.routes import *


if __name__ == '__main__':
    with api.app_context():
        #se crean las tablas que se encuentren en el modelo si no existen
        db.create_all()
    #se ejecuta la aplicación flask
    api.run(port=5000, debug=True)