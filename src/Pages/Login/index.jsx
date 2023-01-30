import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailAndPassword() {
    setEmail(email);
    setPassword(password);
    console.log(`
    Email: ${email},
    Password: ${password}
    `);
  }

  return (
    <div className="main-content">
      <div className="insta-main-image">
        <img
          src="./assets/Main-image.png"
          alt="Imagem de um celular simulando o uso do aplicativo."
        />
      </div>
      <div className="main-infos">
        <div className="inputs">
          <img src="./assets/Instagram-Logo.png" alt="Logo do Instagram" />
          <div className="inputs-area">
            <input
              type="text"
              placeholder="Email do usuário"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>

          <button type="button" onClick={handleEmailAndPassword}>
            Entrar
          </button>

          <span>OU</span>
          <div className="links">
            <a className="facebook" href="https://facebook.com" target="_blank">
              <img src="" alt="" /> Entrar com o Facebook
            </a>
            <a className="password" href="">
              <span>Esqueceu a senha?</span>
            </a>
          </div>
        </div>
        <div className="create-account">
          <span>
            Não tem uma conta? <a href="/create-account">Cadastre-se</a>
          </span>
        </div>
        <div className="download">
          <span>Obtenha o aplicativo.</span>
          <div className="download-imgs">
            <a href="">
              <img className="google" src="./assets/Google-play.png" alt="" />
            </a>
            <a href="">
              <img className="microsoft" src="./assets/Mirosoft.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
