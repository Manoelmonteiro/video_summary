VideoSummaryAI — AI-Powered Video Transcription & Analysis System










VideoSummaryAI is a complete end-to-end application that uses Artificial Intelligence to:

Download YouTube videos

Automatically transcribe the audio

Generate a detailed explanation of the content

Display the result directly in the browser

The system uses:

✔ FastAPI backend
✔ React + Vite frontend
✔ Groq Whisper & Compound AI models
✔ REST API integration
✔ Python virtual environment (venv)

🚀 Features
🎥 Automatic Video Download (YouTube)

Uses pytubefix

Automatically selects the highest resolution

Progress tracking in the terminal

🎧 Audio Transcription with Whisper

Model: whisper-large-v3-turbo

Very fast and highly accurate

Returns clean text extracted from verbose JSON

🧠 Intelligent Explanation via groq/compound

AI model specialized in reasoning and content interpretation

Generates a clear, structured explanation of the video

Ready for future expansion:

short summary

long summary

technical analysis

translation

🌐 Modern Web Interface

Built with React + Vite

Sends the video URL to the backend

Displays real-time results in the browser

🏗 Architecture Overview
📦 video_summary_clean
 ┣ 📂 backend
 ┃ ┣ main.py               → FastAPI REST API (POST /processar)
 ┃ ┗ summary_video.py      → Download → transcription → analysis pipeline
 ┣ 📂 frontend
 ┃ ┣ src/                  → React components
 ┃ ┣ package.json
 ┃ ┗ vite.config.js
 ┣ 📂 venv/                → Python virtual environment
 ┗ README.md

🔧 Technologies Used
Backend

Python 3.12

FastAPI

Uvicorn

pytubefix

Groq Whisper-large-v3-turbo

Groq Compound

glob

venv

Frontend

React

Vite

JavaScript ES6+

Node.js / npm

⚙️ Installation & Execution
🐍 Backend (FastAPI)
1️⃣ Create and activate the virtual environment
python3 -m venv venv
source venv/bin/activate

2️⃣ Install dependencies
pip install -r requirements.txt

3️⃣ Set your Groq API key
export GROQ_API_KEY="your-key-here"

4️⃣ Start the FastAPI server
uvicorn backend.main:app --reload


Backend available at:
👉 http://127.0.0.1:8000

💻 Frontend (React + Vite)
1️⃣ Enter the frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


Frontend available at:
👉 http://localhost:5173/

🔄 System Workflow

User enters a YouTube URL in the React frontend

React sends a POST /processar to the FastAPI backend

Backend executes:

video download

MP4 detection

transcription using Whisper

explanation using groq/compound

Backend returns JSON with the full explanation

Frontend displays the result on the page

🛠 Issues Solved During Development

Missing environment variable → fixed with proper export

Groq API returning 401 → API key properly configured

Output printed only in terminal → replaced print() with return values

Frontend not receiving backend responses → API adjusted

Vite requiring Node 20+ → Node upgraded

CORS blocking frontend → middleware enabled

Git branch without upstream → git push --set-upstream origin develop

Merge conflicts with develop/main → resolved manually

📈 Future Improvements

Export explanation as PDF

Automatic short/long summaries

Multi-language support

Dashboard with history

React Native mobile app

👤 Author

Manoel Monteiro

📧 Email: manoell2002@gmail.com

🐙 GitHub: https://github.com/Manoelmonteiro

🔗 LinkedIn: https://www.linkedin.com/in/manoel-monteiro-445648182/
