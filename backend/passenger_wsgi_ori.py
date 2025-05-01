import sys
import os

from fastapi import FastAPI
from fastapi.middleware.wsgi import WSGIMiddleware

sys.path.insert(0, os.path.dirname(__file__))

from app.main import app

# Convertimos FastAPI → WSGI
application = WSGIMiddleware(app)
