import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" />

        <Route path="/new" />
      </Routes>
    </main>
  );
}

export default App;
