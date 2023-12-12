import React, { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");

  function handleChange(event) {
    setTexto(event.target.value);
  }

  return (
    <main>
      <header>
        <img src="https://i.imgur.com/4VnoACr.png" alt="Logo" />
        <h1 style={{ textAlign: "center" }}>Traductor dactilológico</h1>
      </header>
      <section id="translator">
        <p>Texto a convertir</p>
        <textarea onChange={handleChange} rows="4"></textarea>
        <p>Texto convertido</p>
        <div id="translation">
          <h1>{texto}</h1>
        </div>
      </section>
    </main>
  );
}

export default App;
