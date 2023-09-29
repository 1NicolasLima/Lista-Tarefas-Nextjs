import React, { useState } from "react";
import firebase from "./firebase"; // Importe o arquivo de configuração Firebase

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // O usuário foi registrado com sucesso.
    } catch (error) {
      // Trate erros de registro aqui.
    }
  };

  return (
    <div>
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
      <button onClick={handleSignup}>Registrar</button>
    </div>
  );
}

export default Signup;
