from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
import os
from uuid import uuid4
from pathlib import Path

router = APIRouter()

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload")
async def upload_photo(file: UploadFile = File(...)):
    file_ext = file.filename.split(".")[-1]
    file_name = f"{uuid4()}.{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, file_name)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    return JSONResponse(content={"message": "Foto subida con éxito", "filename": file_name})

@router.get("/gallery")
async def get_gallery():
    uploads_path = Path("uploads")
    uploads_path.mkdir(exist_ok=True)
    files = [f.name for f in uploads_path.iterdir() if f.is_file()]
    return {"photos": files}
