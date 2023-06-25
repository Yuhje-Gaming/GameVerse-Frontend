import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import mockGames from "../mockGames";

const GameIndex = ({ games }) => {
  console.log(games);

  const containerStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "2rem",
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const ratingStyle = {
    position: "absolute",
    bottom: "0",
    right: "0",
    padding: "0.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: "0.25rem",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: "5%",
  };

  return (
    <main style={containerStyle}>
      <Container>
        <Row style={rowStyle}> {/* Add the rowStyle to the Row component */}
          {mockGames?.slice(0, 10).map((game, index) => {
            return (
              <Col md="4" sm="6" xs="12" key={index}> {/* Adjust the column size */}
                <Card body className="text-left" color="dark" style={cardStyle}>
                  <img alt={`profile of a game named ${game.name}`} src={game.image} />
                  <CardBody>
                    <CardTitle tag="h5">{game.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-white" tag="h6">
                      Name: {game.title}
                      <br />
                      Platform: {game.platform}
                      <br />
                      <span style={ratingStyle}>{game.rating}</span>
                    </CardSubtitle>
                    <NavLink to={`/gameshow/${game.id}`}>
                      <div className="mb-2 text-white" tag="h6">
                        Click to view
                      </div>
                    </NavLink>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default GameIndex;
