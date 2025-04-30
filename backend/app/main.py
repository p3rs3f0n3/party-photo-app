from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import photos, reactions
from fastapi.staticfiles import StaticFiles
import os

# Asegura que exista la carpeta uploads
os.makedirs("uploads", exist_ok=True)

app = FastAPI()

# CORS para que React pueda conectarse
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir cualquier origen por ahora
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(photos.router, prefix="/photos")
app.include_router(reactions.router, prefix="/reactions")
# Sirve los archivos estáticos
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

