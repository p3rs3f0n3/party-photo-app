from flask import Blueprint, request, jsonify, send_from_directory
import os
from uuid import uuid4

photos_bp = Blueprint('photos', __name__)

UPLOAD_DIR = 'uploads'
os.makedirs(UPLOAD_DIR, exist_ok=True)

@photos_bp.route('/upload', methods=['POST'])
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

@photos_bp.route('/gallery', methods=['GET'])
def get_gallery():
    files = os.listdir(UPLOAD_DIR)
    return jsonify({"photos": files})

@photos_bp.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_DIR, filename)
