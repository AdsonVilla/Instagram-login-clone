import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="insta-main-image">
          <img src="./assets/Main-image.png" alt="" />
        </div>
        <div className="main-infos">
          <div className="inputs">
            <img src="./assets/Instagram-Logo.png" alt="" />
            <div className="inputs-area">
              <input
                type="text"
                placeholder="Telefone, número do usuário ou email"
              />
              <input type="text" placeholder="Senha" />
            </div>

            <button type="button">Entrar</button>

            <span>OU</span>
            <div className="links">
              <a className="facebook" href="">
                <img src="" alt="" /> Entrar com o Facebook
              </a>
              <a className="password" href="">
                <span>Esqueceu a senha?</span>
              </a>
            </div>
          </div>
          <div className="create-account">
            <span>
              Não tem uma conta? <a href="">Cadastre-se</a>
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
    </div>
  );
}
export default App;
