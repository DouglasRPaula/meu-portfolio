import { useState } from "react";

const palavras = ["REACT", "JAVASCRIPT", "PROGRAMACAO", "DESENVOLVEDOR"];

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [palavraSecreta, setPalavraSecreta] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(6);

  const handleLetra = (letra) => {
    if (palavraSecreta.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativas(tentativas - 1);
    }
  };

  return (
    <div className="container">
      <h1>Jogo da Forca</h1>

      <p>
        Palavra:{" "}
        {palavraSecreta
          .split("")
          .map((letra) => (letrasCorretas.includes(letra) ? letra : "_"))
          .join(" ")}
      </p>

      <p>Tentativas restantes: {tentativas}</p>

      <p>Letras erradas: {letrasErradas.join(", ")}</p>

      <input
        type="text"
        maxLength="1"
        onChange={(e) => handleLetra(e.target.value.toUpperCase())}
      />

      <button onClick={() => window.location.reload()}>Reiniciar</button>
    </div>
  );
}
