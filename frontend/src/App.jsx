import { useState } from "react";
import Login from "./login";  

function App() {
  const [url, setUrl] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
   return (
    <div className="App">

      <Login /> {/* <--- Chamando o componente de login */}
    </div>
  );
  
  const enviarVideo = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResultado("");

    try {
      const response = await fetch("http://127.0.0.1:8000/processar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setResultado(data.resultado);
    } catch (error) {
      setResultado("Erro ao processar o vídeo.");
    }

    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #080b12;
          color: #e8eaf0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .bg-orbs {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          animation: drift 18s ease-in-out infinite alternate;
        }
        .orb-1 { width: 500px; height: 500px; background: #e63946; top: -100px; left: -150px; animation-duration: 20s; }
        .orb-2 { width: 400px; height: 400px; background: #ff6b35; bottom: -80px; right: -100px; animation-duration: 15s; animation-delay: -7s; }
        .orb-3 { width: 300px; height: 300px; background: #c9184a; top: 40%; left: 55%; animation-duration: 12s; animation-delay: -3s; }

        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.1); }
        }

        .wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
          padding: 60px 20px 80px;
        }

        /* ── Header ── */
        .header {
          text-align: center;
          margin-bottom: 56px;
          animation: fadeUp 0.7s ease both;
        }
        .badge {
          display: inline-block;
          background: rgba(230, 57, 70, 0.15);
          border: 1px solid rgba(230, 57, 70, 0.35);
          color: #ff6b6b;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          line-height: 1.05;
          letter-spacing: -1.5px;
          background: linear-gradient(135deg, #fff 30%, #ff8c94 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }
        .subtitle {
          
          font-size: 1.05rem;
          color: rgba(232, 234, 240, 0.55);
          font-weight: 300;
          line-height: 1.6;
        }

        /* ── Card ── */
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 36px 32px;
          width: 100%;
          max-width: 620px;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          animation: fadeUp 0.7s 0.15s ease both;
        }

        /* ── Input wrapper ── */
        .input-wrap {
          position: relative;
          margin-bottom: 16px;
        }
        .yt-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 22px;
          height: 22px;
          opacity: 0.5;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .input-wrap.focused .yt-icon { opacity: 1; }

        input[type="text"] {
          width: 100%;
          padding: 15px 16px 15px 48px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #e8eaf0;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        input[type="text"]::placeholder { color: rgba(232,234,240,0.3); }
        input[type="text"]:focus {
          border-color: rgba(230, 57, 70, 0.6);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(230,57,70,0.12);
        }

        /* ── Button ── */
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 15px;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #fff;
          background: linear-gradient(135deg, #e63946 0%, #c9184a 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
          box-shadow: 0 4px 24px rgba(230,57,70,0.35);
          position: relative;
          overflow: hidden;
        }
        .btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(230,57,70,0.45); }
        .btn:hover::before { opacity: 1; }
        .btn:active { transform: translateY(0); }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        /* ── Loading ── */
        .loading-row {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          margin-top: 22px;
          font-size: 0.88rem;
          color: rgba(232,234,240,0.45);
          letter-spacing: 0.3px;
          animation: fadeUp 0.4s ease both;
        }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(230,57,70,0.2);
          border-top-color: #e63946;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Result ── */
        .result-box {
          margin-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 28px;
          animation: fadeUp 0.5s ease both;
        }
        .result-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e63946;
          margin-bottom: 14px;
        }
        .result-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(230,57,70,0.4), transparent);
        }
        .result-text {
          font-size: 0.97rem;
          line-height: 1.75;
          color: rgba(232, 234, 240, 0.82);
          font-weight: 300;
          white-space: pre-wrap;
        }

        /* ── Features ── */
        .features {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 28px;
          animation: fadeUp 0.7s 0.3s ease both;
        }
        .feature-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: rgba(232,234,240,0.4);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
          padding: 6px 14px;
        }
        .feature-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #e63946;
          opacity: 0.7;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

        


      <div className="wrapper">
        {/* Header */}
        <header className="header">
          <div className="badge">✦ Powered by GOD</div>
          <h1>VideoSummary AI</h1>
          <p className="subtitle">Cole o link de qualquer vídeo do YouTube e receba um resumo inteligente em segundos.</p>
        </header>

        {/* Main card */}
        <div className="card">
          <form onSubmit={enviarVideo}>
            <div className={`input-wrap ${focused ? "focused" : ""}`}>
              {/* YouTube icon */}
              <svg className="yt-icon" viewBox="0 0 24 24" fill="none">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" fill="#e63946"/>
                <path d="M9.75 15.02 15.5 12l-5.75-3.02v6.04Z" fill="white"/>
              </svg>
              <input
                type="text"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                required
              />
            </div>

            <button className="btn" type="submit" disabled={loading || !url.trim()}>
              {loading ? (
                <>
                  <div className="spinner" />
                  Processando...
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Gerar Resumo
                </>
              )}
            </button>
          </form>

          {loading && (
            <div className="loading-row">
              <div className="spinner" />
              Transcrevendo e analisando o vídeo...
            </div>
          )}

          {resultado && (
            <div className="result-box">
              <div className="result-label">Resumo gerado</div>
              <p className="result-text">{resultado}</p>
            </div>
          )}
        </div>

        {/* Feature pills */}
        <div className="features">
          <div className="feature-pill"><div className="feature-dot" />Transcrição automática</div>
          <div className="feature-pill"><div className="feature-dot" />Resumo inteligente</div>
          <div className="feature-pill"><div className="feature-dot" />Suporta qualquer idioma</div>
        </div>
      </div>
    </>
  );
}

export default App;