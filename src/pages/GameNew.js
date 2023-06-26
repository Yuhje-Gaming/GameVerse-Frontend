import React, { useState, currentUser } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import mockUsers from "../mockUsers";


const GameNew = ({ createGame, currentUser }) => {

  const [newGame, setNewGame] = useState({
    title: "",
    rating: "",
    platform: "",
    genre: "",
    developer: "",
    image: "",
    summary: "",
    release_date: "",
    user_id: mockUsers[0].id,
  });

  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    createGame({ ...newGame, user_id: currentUser.id });
    navigate("/gameindex");
  };
  

  return (
    <div
      style={{
        backgroundImage: "url(https://shorturl.at/gklQ3)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter your Game Title"
                type="text"
                onChange={handleChange}
                value={newGame.title}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="rating">Game Rating</Label>
              <Input
                id="rating"
                name="rating"
                placeholder="Enter the Game rating number"
                type="text"
                onChange={handleChange}
                value={newGame.rating}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="platform">Platform</Label>
              <Input
                id="platform"
                name="platform"
                placeholder="Enter the Game platform"
                type="text"
                onChange={handleChange}
                value={newGame.platform}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="genre">Game Genre</Label>
              <Input
                id="genre"
                name="genre"
                placeholder="Enter the Game genre"
                type="text"
                onChange={handleChange}
                value={newGame.genre}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="developer">Developer</Label>
              <Input
                id="developer"
                name="developer"
                placeholder="Enter the Game Developer"
                type="text"
                onChange={handleChange}
                value={newGame.developer}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                id="image"
                name="image"
                placeholder="Provide link to a photo of your Game"
                onChange={handleChange}
                value={newGame.image}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="summary">Summary</Label>
              <Input
                id="summary"
                name="summary"
                placeholder="Enter Game summary"
                type="text"
                onChange={handleChange}
                value={newGame.summary}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="release_date">Game Release Date</Label>
              <Input
                id="release_date"
                name="release_date"
                placeholder="Enter the release_date"
                type="date"
                onChange={handleChange}
                value={newGame.release_date}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={handleSubmit} name="submit">
          Add New Game
        </Button>
      </Form>
    </div>
  );
};

export default GameNew;
