import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const fazerLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");
    setIsError(false);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMensagem(data.detail || "Erro ao fazer login.");
      } else {
        setIsError(false);
        setMensagem("Login realizado com sucesso! Redirecionando...");
        // Aqui você faria o redirecionamento ou salvaria o token
        console.log("Token:", data.token);
      }
    } catch (error) {
      setIsError(true);
      setMensagem("Erro de conexão com o servidor.");
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
          justify-content: center;
          min-height: 100vh;
          padding: 60px 20px;
        }

        /* ── Header ── */
        .header {
          text-align: center;
          margin-bottom: 40px;
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
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: -1px;
          background: linear-gradient(135deg, #fff 30%, #ff8c94 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
        }
        .subtitle {
          font-size: 1.05rem;
          color: rgba(232, 234, 240, 0.55);
          font-weight: 300;
        }

        /* ── Card ── */
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 40px 32px;
          width: 100%;
          max-width: 450px;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          animation: fadeUp 0.7s 0.15s ease both;
        }

        /* ── Input wrapper ── */
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .input-wrap {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          opacity: 0.5;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .input-wrap.focused .input-icon { opacity: 1; }

        input {
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
        input::placeholder { color: rgba(232,234,240,0.3); }
        input:focus {
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

        /* ── Spinners e Mensagens ── */
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .message-box {
          margin-top: 20px;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          text-align: center;
          animation: fadeUp 0.3s ease both;
        }
        .message-box.error {
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid rgba(230, 57, 70, 0.3);
          color: #ff6b6b;
        }
        .message-box.success {
          background: rgba(46, 204, 113, 0.1);
          border: 1px solid rgba(46, 204, 113, 0.3);
          color: #2ecc71;
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
        <header className="header">
          <div className="badge">✦ Área Restrita</div>
          <h1>Bem-vindo</h1>
          <p className="subtitle">Faça login para acessar sua conta.</p>
        </header>

        <div className="card">
          <form onSubmit={fazerLogin}>
            <div className="input-group">
              {/* Campo Email */}
              <div className={`input-wrap ${focusedInput === "email" ? "focused" : ""}`}>
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </div>

              {/* Campo Senha */}
              <div className={`input-wrap ${focusedInput === "senha" ? "focused" : ""}`}>
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onFocus={() => setFocusedInput("senha")}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </div>
            </div>

            <button className="btn" type="submit" disabled={loading || !email || !senha}>
              {loading ? (
                <>
                  <div className="spinner" />
                  Entrando...
                </>
              ) : (
                "Entrar na conta"
              )}
            </button>
          </form>

          {/* Feedback Visual */}
          {mensagem && (
            <div className={`message-box ${isError ? "error" : "success"}`}>
              {mensagem}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;