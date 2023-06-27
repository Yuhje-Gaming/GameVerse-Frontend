import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button, NavLink } from "reactstrap";
import "../styles/GameShow.css"; // Additional CSS file for styles

const GameShow = ({ games }) => {
  const { id } = useParams();
  let currentGame = games?.find((game) => game.id === +id);

  return (
    <main className="game-show-container"> {/* Updated class name */}
      {currentGame && (
        <div className="show-game-card-container"> {/* New div with class for centering */}
          <Card className="show-card-style" body color="dark">
            <img
              alt={`profile of the game ${currentGame.name}`}
              src={currentGame.image}
              className="profile-pic"
            />

            <CardBody>
              <CardTitle className="mb-2 text-white" tag="h5">{currentGame.title}</CardTitle>

              <CardSubtitle className="mb-2 text-success" tag="h6">
                Platform: {currentGame.platform}
              </CardSubtitle>

              <CardSubtitle className="mb-2 text-white" tag="h6">
                Genre: {currentGame.genre}
              </CardSubtitle>

              <CardSubtitle className="mb-2 text-white" tag="h6">
                Developer: {currentGame.developer}
              </CardSubtitle>

              <CardSubtitle className="mb-2 text-white" tag="h6">
                Summary: {currentGame.summary}
              </CardSubtitle>

              <CardSubtitle className="mb-2 text-danger" tag="h6">
                Release Date: {currentGame.release_date}
              </CardSubtitle>

              <CardSubtitle className="ratingStyle text-white bg-success" tag="h6">
                <span>{currentGame.rating}</span>
              </CardSubtitle> 
              <NavLink to={`/gameedit/${currentGame.id}`}></NavLink>
              <Button class=" text-white  bg-info" >Edit</Button>
            </CardBody>
          </Card>
        </div>
      )}
    </main>
  );
};

export default GameShow;
