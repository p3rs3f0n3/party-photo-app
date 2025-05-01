from flask import Flask
from app.routes.photos import photos_bp
from app.routes.reactions import reactions_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Registrar blueprints
app.register_blueprint(reactions_bp)
app.register_blueprint(photos_bp, url_prefix="/photos")


@app.route('/')
def index():
    return {"message": "Backend Flask OK"}

# Exportar como 'application' para Passenger
application = app

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
