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
        <div className="cardGrid-index">
          {filteredGames.slice(0, 10).map((game, index) => {
            return (
              <Card className="card-container-index" key={index} >
                <img className="card-img-index" alt={`profile of a game named ${game.name}`} src={game.image} />
                <CardBody className="card-body-index">
                  <CardTitle className="card-title-index" tag="h5">{game.name}</CardTitle>
                  <CardSubtitle className="card-subtitle-index" tag="h6">
                    Name: {game.title}
                    <br />
                    Platform: {game.platform}
                    <br />                  
                  </CardSubtitle>
                    <div className="click-btn-container" tag="h6">
                  <NavLink className="click-btn-container" to={`/gameshow/${game.id}`}>
                      View
                  </NavLink>                  
                    </div>
                    <div className="card-rating-index">{game.rating}</div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Container>
  );
};

export default GameIndex;
