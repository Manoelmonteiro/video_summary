from fastapi import FastAPI
from pydantic import BaseModel
from summary_video import baixa_transcreve
from fastapi.middleware.cors import CORSMiddleware
from login import verificaEmail

app= FastAPI()

class Video(BaseModel):
    url: str

@app.post("/processar")
def processar_video(video: Video):
    resultado = baixa_transcreve(video.url)
    return {"resultado": resultado}

class Login(BaseModel):
    email: str
    senha: str

@app.post("/login")
def verifica_login(dados: Login):
    return verificaEmail(dados.email, dados.senha)



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