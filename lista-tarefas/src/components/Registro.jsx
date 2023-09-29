import React, { useState } from "react";
import firebase from "./firebase";
import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import './css/Registro.css'
import { Link } from "react-router-dom";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // Use o hook useNavigate para acessar o objeto de navegação

  const handleSignup = async () => {
    try {
      // Crie um novo usuário com o email e senha fornecidos.
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Após o registro bem-sucedido, você pode redirecionar o usuário para a página de perfil
      // ou qualquer outra página desejada usando o hook useNavigate.
      navigate("/profile");

      // Exiba uma mensagem de boas-vindas para o usuário.
      alert("Bem-vindo! Você foi registrado com sucesso.");

      // Limpe os campos de entrada após o registro bem-sucedido.
      setEmail("");
      setPassword("");
    } catch (error) {
      // Trate erros de registro aqui.
      console.error("Erro ao tentar registrar:", error.message);

      // Dependendo do tipo de erro, você pode exibir mensagens de erro específicas para o usuário.
      if (error.code === "auth/email-already-in-use") {
        alert("Este email já está em uso. Por favor, faça login ou escolha outro email.");
      } else {
        alert("Ocorreu um erro ao registrar. Por favor, tente novamente mais tarde.");
      }
    }
  };

//   $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//  });

  return (
    <div class="login-page">
      <h1>Registre-se</h1>
      <div class="form">
        <form class="register-form">
            <input className=""
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Registrar</button>
            <p class="message">Ja está registrado? <Link to="/">Login</Link></p>
        </form>
        {/*  */}
      </div>
    </div>

    /* <div>
        <input className=""
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Registrar</button>
      </div></> */
  );
}

export default Signup;
