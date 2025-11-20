from fastapi import FastAPI
from pydantic import BaseModel
from summary_video import baixa_transcreve
from fastapi.middleware.cors import CORSMiddleware

app= FastAPI()

class Video(BaseModel):
    url: str

@app.post("/processar")
def processar_video(video: Video):
    resultado = baixa_transcreve(video.url)
    return {"resultado": resultado}

@app.get("/")
def home():
    return {"status": "ok"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)