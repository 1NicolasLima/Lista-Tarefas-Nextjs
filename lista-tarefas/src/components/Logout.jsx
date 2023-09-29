import React from "react";
import firebase from "./firebase"; // Importe o arquivo de configuração Firebase

function Logout() {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      // O usuário fez logout com sucesso.
    } catch (error) {
      // Trate erros de logout aqui.
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
