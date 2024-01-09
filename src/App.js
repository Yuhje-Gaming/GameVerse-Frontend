import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import GameEdit from "./pages/GameEdit";
import GameIndex from "./pages/GameIndex";
import GameNew from "./pages/GameNew";
import GameProtectedIndex from "./pages/GameProtectedIndex";
import GameShow from "./pages/GameShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import mockGames from "./mockGames.js";
import GameCatalogPage from "./pages/GameCatalogPage.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [games, setGames] = useState(mockGames);

  const navigate = useNavigate();
  console.log(currentUser);
  console.log(games);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  const createGame = (game) => {
    // Simulate the creation of a new game locally
    const newGame = {
      ...game,
      id: games.length + 1,
      user_id: currentUser ? currentUser.id : null,
    };
    setGames([...games, newGame]);
  };

  const updateGame = (game, id) => {
    // Simulate the update of a game locally
    const updatedGames = games.map((g) => (g.id === id ? { ...g, ...game } : g));
    setGames(updatedGames);
  };

  const destroyGame = (id) => {
    // Simulate the deletion of a game locally
    const updatedGames = games.filter((g) => g.id !== id);
    setGames(updatedGames);
    navigate("/gameindex");
  };

  const login = (userInfo) => {
    // Simulate login by setting the current user
    setCurrentUser(userInfo);
    localStorage.setItem("token", "fakeToken");
  };

  const signup = (userInfo) => {
    // Simulate signup by setting the current user
    setCurrentUser(userInfo);
    localStorage.setItem("token", "fakeToken");
  };

  const logout = () => {
    // Simulate logout by removing the token and current user
    localStorage.removeItem("token");
    setCurrentUser(null);
  };


  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/gameedit/:id"
          element={
            <GameEdit
              games={games}
              updateGame={updateGame}
              destroyGame={destroyGame}
            />
          }
        />
        <Route path="/gameindex" element={<GameIndex games={games} />} />
        <Route
          path="/gamenew"
          element={
            <GameNew createGame={createGame} currentUser={currentUser} />
          }
        />
        <Route
          path="/gameprotectedindex"
          element={
            <GameProtectedIndex currentUser={currentUser} games={games} />
          }
        />
        <Route
          path="/gameshow/:id"
          element={<GameShow currentUser={currentUser} games={games} />}
        />
        <Route path="/login" element={<LogIn login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gamecatalogpage" element={<GameCatalogPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
