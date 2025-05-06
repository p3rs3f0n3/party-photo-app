from flask import Flask
from app.routes.photos import photos_bp
from app.routes.reactions import reactions_bp
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask import request, jsonify
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'mojarras_partyphotoapp'
app.config['MYSQL_PASSWORD'] = 'VCxPKGgmRBXB67VxCvDT'
app.config['MYSQL_DB'] = 'mojarras_partyphotoapp'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# Registrar blueprints
app.register_blueprint(reactions_bp)
app.register_blueprint(photos_bp, url_prefix="/photos")

@app.route('/')
def index():
    return {"message": "Backend Flask OK"}


@app.route('/login/host', methods=['POST'])
def login_host():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hosts WHERE username = %s", (username,))
        host = cur.fetchone()
        cur.close()

        if host and host['password'] == password:
            return jsonify({'message': 'Login exitoso', 'host_id': host['id']})
        else:
            return jsonify({'message': 'Credenciales inválidas'}), 401

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'message': f'Error interno: {str(e)}'}), 500
    

@app.route('/register/host', methods=['POST'])
def register_host():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hosts WHERE username = %s", (username,))
        existing_host = cur.fetchone()

        if existing_host:
            cur.close()
            return jsonify({'message': 'El usuario ya existe'}), 400

        cur.execute("INSERT INTO hosts (username, password) VALUES (%s, %s)", (username, password))
        mysql.connection.commit()
        cur.close()

        return jsonify({'message': 'Host registrado exitosamente'})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'message': f'Error interno: {str(e)}'}), 500


# Exportar como 'application' para Passenger
application = app

if __name__ == "__main__":
    
    app.run(host="0.0.0.0", port=8000, debug=True)
