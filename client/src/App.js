import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navigation/NavBar";
import Login from "./components/pages/Login";
import AddReview from "./components/pages/AddReview";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/addReview" element={<AddReview />}/>
      </Routes>
    </main>
  );
}

export default App;
