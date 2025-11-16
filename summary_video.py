from pytubefix import YouTube ## baixar vídeos do YouTube
from pytubefix.cli import on_progress 
import ffmpeg ## para gravar, converter, transmitir e manipular arquivos de áudio e vídeo
from openai import OpenAI ## inteligência artificial (IA)
from dotenv import load_dotenv, find_dotenv ## carrega .env
import glob ## para procurar por arquivos .mp4
from groq import Groq
import os

##groq/compound
##whisper-large-v3-turbo

def chave_Api():
    client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
    )
    return client



def transcreve_Audio(api_client): 
    

    filename = procura_mp4()
    with open(filename, "rb") as file:
        transcription = api_client.audio.transcriptions.create(
        file=(filename, file.read()),
        model="whisper-large-v3-turbo",
        temperature=0,
        response_format="verbose_json",
        )
        return transcription.text





def explica_Audio(api_client):

    chat_completion = api_client.chat.completions.create(

        messages=[
            {
                "role": "user",
                "content": f"Explain the text: {transcreve_Audio(api_client)} ",
            }
        ],
        model="groq/compound",
    )

    print(chat_completion.choices[0].message.content)



def carrega_Api():

    load_dotenv(find_dotenv())

    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))



    response = client.chat.completions.create(
        model="whisper-large-v3-turbo",
        messages=[
            {"role":"user","content":"Escreva uma breve historia de um programador tentando aprender python"}
        ],
        max_tokens=100
    )

    print(response.choices[0].text.strip())


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
    baixa_Video()
    input = ffmpeg.input(procura_mp4())
    audio = input.audio.filter("aecho", 0.8, 0.9, 1000, 0.3)
    video = input.video.hflip()
    out = ffmpeg.output(audio, video,'out.mp4')
    out.run()


def baixa_transcreve():
    baixa_Video()
    explica_Audio(chave_Api())

baixa_transcreve()