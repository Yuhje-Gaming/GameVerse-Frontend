import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import mockUsers from "./mockUsers";
import mockGames from "./mockGames";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [games, setGames] = useState(mockGames);

  console.log(currentUser);
  console.log(games);

  const login = (userInfo) => {
    const { email, password } = userInfo.user
    const foundUser = mockUsers.find((user) => user.email === email && user.password === password)

    console.log("user", foundUser)

    if (foundUser) {
      setCurrentUser(foundUser)
      console.log('login!')
    } else {
      console.log('invalid email or pass')
    }
  }

  const signup = (userInfo) => {
    const { email, password } = userInfo.user
    const existingUser = mockUsers.find((user) => user.email === email)

    if (existingUser) {
      console.log('User already exists!')
    } else {
      const newUser = {
        id: mockUsers.length + 1,
        email: email,
        password: password
      }
      mockUsers.push(newUser)
      setCurrentUser(newUser)
      console.log('User signed up success!')
    }
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const createGame = (mockGames) => {
    console.log(mockGames);
  };

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gameedit" element={<GameEdit />} />
        <Route path="/gameindex" element={<GameIndex games={games} />} />
        <Route
          path="/gamenew"
          element={
            <GameNew createGame={createGame} currentUser={currentUser} />
          }
        />
        <Route path="/gameprotectedindex" element={<GameProtectedIndex currentUser={currentUser} games={games} />} />
        <Route path="/gameshow/:id" element={<GameShow currentUser={currentUser} games={games}/>} />
        <Route path="/login" element={<LogIn login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
