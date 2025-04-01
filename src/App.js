import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      <nav>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("signup")}>Signup</button>
    
      </nav>

      {page === "login" && <Login />}
      {page === "signup" && <Signup />}
    
    </div>
  );
}

export default App;
