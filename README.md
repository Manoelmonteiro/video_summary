### VideoSummaryAI — AI-Powered Video Transcription & Analysis System










<b>VideoSummaryAI</b> is a complete end-to-end application that uses Artificial Intelligence to:

-Download YouTube videos

-Automatically transcribe the audio

-Generate a detailed explanation of the content

-Display the result directly in the browser

The system uses:

✔ FastAPI backend

✔ React + Vite frontend

✔ Groq Whisper & Compound AI models

✔ REST API integration

✔ Python virtual environment (venv)


### Features
## Automatic Video Download (YouTube)

•Uses pytubefix

•Automatically selects the highest resolution

•Progress tracking in the terminal

## Audio Transcription with Whisper

Model: whisper-large-v3-turbo

Very fast and highly accurate

Returns clean text extracted from verbose JSON

## Intelligent Explanation via groq/compound

•AI model specialized in reasoning and content interpretation

•Generates a clear, structured explanation of the video

•Ready for future expansion:

-short summary

-long summary

-technical analysis

-translation

## Modern Web Interface

•Built with React + Vite

•Sends the video URL to the backend

•Displays real-time results in the browser

## Architecture Overview
📦 video_summary_clean



 <code>📦 video_summary_clean
 ┣ 📂 backend
 ┃ ┣ main.py               → FastAPI REST API (POST /processar)
 ┃ ┗ summary_video.py      → Download → transcription → analysis pipeline
 ┣ 📂 frontend
 ┃ ┣ src/                  → React components
 ┃ ┣ package.json
 ┃ ┗ vite.config.js
 ┣ 📂 venv/                → Python virtual environment
 ┗ README.md </code>



### Technologies Used
## Backend

•Python 3.12

•FastAPI

•Uvicorn

•pytubefix

•Groq Whisper-large-v3-turbo

•Groq Compound

•glob

•venv

## Frontend

React

Vite

JavaScript ES6+

Node.js / npm

## Installation & Execution
## Backend (FastAPI)
# 1. Create and activate the virtual environment 

<code> python3 -m venv venv
source venv/bin/activate </code>

# 2. Install dependencies

<code> pip install -r requirements.txt
 </code>

# 3. Set your Groq API key
<code> export GROQ_API_KEY="your-key-here" </code>

# 4. Start the FastAPI server
<code> uvicorn backend.main:app --reload </code>


## Frontend (React + Vite)
## 1. Enter the frontend folder
<code> cd frontend </code>

## 2. Install dependencies
<code> npm install </code>

## 3. Start the development server
<code> npm run dev </code>


Frontend available at:
👉 http://localhost:5173/

## System Workflow

1. User enters a YouTube URL in the React frontend

2. React sends a POST /processar to the FastAPI backend

3. Backend executes:

•video download

•MP4 detection

•transcription using Whisper

•explanation using groq/compound

4. Backend returns JSON with the full explanation

5. Frontend displays the result on the page

## Issues Solved During Development

•Missing environment variable → fixed with proper export

•Groq API returning 401 → API key properly configured

•Output printed only in terminal → replaced print() with return values

•Frontend not receiving backend responses → API adjusted

•Vite requiring Node 20+ → Node upgraded

•CORS blocking frontend → middleware enabled

•Git branch without upstream → git push --set-upstream origin develop

•Merge conflicts with develop/main → resolved manually

## Future Improvements

Export explanation as PDF

Automatic short/long summaries

Multi-language support

Dashboard with history

React Native mobile app

## Author

Manoel Monteiro

📧 Email: manoell2002@gmail.com

🐙 GitHub: https://github.com/Manoelmonteiro

🔗 LinkedIn: https://www.linkedin.com/in/manoel-monteiro-445648182/
 
