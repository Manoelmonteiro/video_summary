import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h1>VideoSummary AI</h1>
      <p>Insira o link de um vídeo do YouTube para transcrever e explicar.</p>

      <form onSubmit={enviarVideo}>
        <input
          type="text"
          placeholder="https://youtube.com/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Processar
        </button>
      </form>

      {loading && <p>Processando vídeo... Aguarde 🔄</p>}

      {resultado && (
  <div
    style={{
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#7981acff",
      color: "white",
      borderRadius: "10px",
      border: "1px solid #646cff",
      whiteSpace: "pre-wrap",
      boxShadow: "0 0 10px rgba(145, 166, 243, 0.4)"
    }}
  >
    <h2 style={{ marginBottom: "10px" }}>Resumo gerado:</h2>
    <p>{resultado}</p>
  </div>
)}

    </div>
  );
}

export default App;
