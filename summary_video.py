from pytubefix import YouTube ## baixar vídeos do YouTube
from pytubefix.cli import on_progress 
import ffmpeg ## para gravar, converter, transmitir e manipular arquivos de áudio e vídeo
import openai ## inteligência artificial (IA)
from dotenv import load_dotenv, find_dotenv ## carrega .env
import glob ## para procurar por arquivos .mp4
import os

def carrega_Api():

    load_dotenv(find_dotenv())

    api_key = os.getenv("OPENAI_API_KEY")
    
    openai.api_key = api_key
    return api_key


def baixa_Video():

    url = input("URL >")
 
    yt = YouTube(url, on_progress_callback = on_progress)
    print(yt.title)

    ys = yt.streams.get_highest_resolution()
    ys.download()


def procura_mp4():

    arquivos = glob.glob("*.mp4")  
    if not arquivos:
        raise FileNotFoundError("Nenhum arquivo .mp4 encontrado")   

    input_file = arquivos[0]

    return input_file


def gerencia_Video():
##apos o video ser baixado, hora de gerenciar o audio
    input = ffmpeg.input(input_file)
    audio = input.audio.filter("aecho", 0.8, 0.9, 1000, 0.3)
    video = input.video.hflip()
    out = ffmpeg.output(audio, video,'out.mp4')
    

