import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Login from "./components/pages/Login";
import AddReview from "./components/pages/AddReview";
import Home from "./components/pages/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(!user) return <Login />

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addReview" element={<AddReview user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
