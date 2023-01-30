import { useState } from "react";
import "./createAccount.css";
// import { saveUsers } from "../../services/storeUsers";

function CreateAccount() {
  // const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // const [myUsers, setMyUsers] = useState([]);

  // useEffect(() => {
  //   async function getUsers() {
  //     const result = await getUsersSaved("@newUser");

  //     setMyUsers(result);
  //   }

  //   getUsers();
  // }, []);

  // function handleUserData() {
  //   // user = {
  //   //   Name: userName,
  //   //   Email: userEmail,
  //   //   Password: userPassword,
  //   // };

  //   // setUserData(userData);
  //   // setUserName(userName);
  //   // setUserEmail(userEmail);
  //   // setUserPassword(userPassword);

  //   // console.log(user);
  //   saveUsers("@newUser", userName);
  //   setMyUsers(myUsers);
  //   console.log(setMyUsers);
  // }

  return (
    <div className="new-account">
      <div className="data-inputs">
        <img src="./assets/Instagram-Logo.png" alt="Logo do Instagram" />
        <div className="data-inputs-area">
          <input
            type="text"
            placeholder="Nome do usuário"
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={(ev) => setUserEmail(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Senha"
            value={userPassword}
            onChange={(ev) => setUserPassword(ev.target.value)}
          />
          <input type="text" placeholder="Confirme a senha" />
        </div>

        <button type="button">Cadastrar</button>
      </div>

      <div className="connect">
        <span>
          Já tem uma conta? <a href="/">Conecte-se</a>
        </span>
      </div>
    </div>
  );
}

export default CreateAccount;
