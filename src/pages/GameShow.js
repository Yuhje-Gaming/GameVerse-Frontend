import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container, NavLink } from "reactstrap";
import "../styles/GameShow.css"; 

const GameShow = ({ games }) => {
  const { id } = useParams();
  let currentGame = games?.find((game) => game.id === +id);

  return (
    <main className="background-image">
      {currentGame && (
        <Container>
          <div className="game-show-container "> 
            <Card className="cardStyle-show" body color="dark">
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

              <div className='edit-btn-container'>
                <Button className="edit-btn" href={`/gameedit/${currentGame.id}`}>Edit Game</Button>
              </div>

            </CardBody>
          </Card>
        </div>
      </Container>
    )}
    </main>
  );
};

export default GameShow;
