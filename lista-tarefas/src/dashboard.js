import React from "react";
import PrivateRoute from "./PrivateRoute";

function Dashboard() {
  return (
    <PrivateRoute>
      <div>
        {/* Conteúdo da página protegida */}
      </div>
    </PrivateRoute>
  );
}

export default Dashboard;
