from flask import Blueprint, request, jsonify

reactions_bp = Blueprint('reactions', __name__)

@reactions_bp.route('/reactions/like', methods=['POST'])
def like_photo():
    return jsonify({"message": "Like registrado"})

@reactions_bp.route('/reactions/comment', methods=['POST'])
def comment_photo():
    data = request.get_json()
    comment = data.get('comment', '')
    return jsonify({"message": f"Comentario recibido: {comment}"})
