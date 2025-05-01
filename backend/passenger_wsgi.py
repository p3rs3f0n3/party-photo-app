from flask import Flask, request, jsonify, send_from_directory
import os
from uuid import uuid4
from app.main import application

app = Flask(__name__)
UPLOAD_DIR = 'uploads'

# Asegura que exista la carpeta uploads
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.route('/')
def index():
    return jsonify({"message": "Backend Flask OK"})

@app.route('/upload', methods=['POST'])
def upload_photo():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    file_ext = file.filename.rsplit('.', 1)[-1]
    filename = f"{uuid4()}.{file_ext}"
    filepath = os.path.join(UPLOAD_DIR, filename)
    file.save(filepath)
    return jsonify({"message": "Foto subida con éxito", "filename": filename})

@app.route('/gallery', methods=['GET'])
def get_gallery():
    files = os.listdir(UPLOAD_DIR)
    return jsonify({"photos": files})

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_DIR, filename)

# ESTA ES LA LÍNEA CLAVE PARA PASSENGER
application = app
