import React, { useState } from "react";
import firebase from './firebase' // Importe o arquivo de configuração Firebase
import { Link } from "react-router-dom";
import './css/Login.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // O usuário fez login com sucesso.
      console.log('Login feito com sucesso')
    } catch (error) {
      // Trate erros de login aqui.
      console.log('Trate erros de login aqui.')
    }
  };


  return (
    <div className="login-page">
      <h1>Login</h1>
      <div className="form">
          <form className="register-form">
            <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
      <p class="message">Não está registrado? <Link to='/Registro'>Registro</Link></p>
      </form>
      </div>
      
      
    </div>
  );
}

export default Login;
