import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/GameIndexStyle.css";

const GameIndex = ({ games }) => {
  const containerStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "2rem",
  };

  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) => {
    const searchableString = `${game.name} ${game.title} ${game.platform}`.toLowerCase();
    return searchableString.includes(search.toLowerCase());
  });

  return (
    <main style={containerStyle}>
      <Container>
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search games"
          />
        </div>
        <div className="cardGrid">
          {filteredGames.slice(0, 10).map((game, index) => {
            return (
              <Card className="cardStyle" color="dark" key={index} >
                <img className="cardStyle img" alt={`profile of a game named ${game.name}`} src={game.image} />
                <CardBody>
                  <CardTitle tag="h5">{game.name}</CardTitle>
                  <CardSubtitle className="text" tag="h6">
                    Name: {game.title}
                    <br />
                    Platform: {game.platform}
                    <br />
                    <span className="ratingStyle">{game.rating}</span>
                  </CardSubtitle>
                  <NavLink to={`/gameshow/${game.id}`}>
                    <div className="mb-2 text-white" tag="h6">
                      Click to view
                    </div>
                  </NavLink>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Container>
    </main>
  );
};

export default GameIndex;
