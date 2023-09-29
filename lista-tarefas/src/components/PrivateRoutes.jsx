import React, { useEffect, useState } from "react";
import firebase from "./firebase"; // Importe o arquivo de configuração Firebase
import { useRouter } from "next/router";

function PrivateRoute({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login"); // Redirecionar para a página de login se não houver usuário autenticado.
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{user ? children : null}</>;
}

export default PrivateRoute;
