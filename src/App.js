import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GameEdit from "./pages/GameEdit";
import GameIndex from "./pages/GameIndex";
import GameNew from "./pages/GameNew";
import GameProtectedIndex from "./pages/GameProtectedIndex";
import GameShow from "./pages/GameShow";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers.js";
import mockGames from "./mockGames";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [games, setGames] = useState(mockGames)

  console.log(currentUser)
  console.log(games)

  return (
    <>
      <Header currentUser={currentUser} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gameedit" element={<GameEdit />} />
        <Route path="/gameindex" element={<GameIndex />} />
        <Route path="/gamenew" element={<GameNew />} />
        <Route path="/gameprotectedindex" element={<GameProtectedIndex />} />
        <Route path="/gameshow" element={<GameShow />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App; 