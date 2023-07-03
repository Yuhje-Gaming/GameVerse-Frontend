import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/GameIndexStyle.css";

const GameIndex = ({ games }) => {

  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) => {
    const searchableString = `${game.name} ${game.title} ${game.platform}`.toLowerCase();
    return searchableString.includes(search.toLowerCase());
  });

  return (
      <Container className="index-page">
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search games"
            className="search-input"
          />
        </div>
        <div className="cardGrid">
          {filteredGames.slice(0, 10).map((game, index) => {
            return (
              <Card className="card-container" color="dark" key={index} >
                <img className="card-img" alt={`profile of a game named ${game.name}`} src={game.image} />
                <CardBody>
                  <CardTitle className="card-title" tag="h5">{game.name}</CardTitle>
                  <CardSubtitle className="card-subtitle" tag="h6">
                    Name: {game.title}
                    <br />
                    Platform: {game.platform}
                    <br />
                    <span className="card-rating">{game.rating}</span>
                  </CardSubtitle>
                    <div className="click-btn-container" tag="h6">
                  <NavLink className="click-btn-container" to={`/gameshow/${game.id}`}>
                      Click to view
                  </NavLink>
                    </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Container>
  );
};

export default GameIndex;
