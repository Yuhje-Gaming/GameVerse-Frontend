import React, { useState , useEffect } from "react";
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

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [games, setGames] = useState([])

  const navigate = useNavigate()
  console.log(currentUser)
  console.log(games)

  const url = "http://localhost:3000"

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    if(loggedInUser) {
      setCurrentUser(loggedInUser)
    }
    readGames()
  }, [])

  const readGames = () => {
    fetch(`${url}/games`)
      .then(response => response.json())
      .then(payload => {
        setGames(payload)
      })
      .catch((error) => console.log(error))
  }

  const createGame = (game) => {
    fetch(`${url}/games`, {
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readGames())
      .catch((errors) => console.log("Game create errors:", errors))
  }

  const updateGame = (game, id) => {
    fetch(`${url}/games/${id}`, {
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => updateGame(payload))
    .catch((errors) => console.log("Game update errors:", errors))
  }

  const destroyGame = (id) => {
    fetch(`${url}/games/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => {
      readGames(payload)
      navigate("/gameindex")
      })
      .catch((error) => console.log("Game delete error:", error))
  }


  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
      .then(payload => {
        localStorage.removeItem("token")  // remove the token
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
  }


  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home readGames={readGames} games={games}/>} />
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
