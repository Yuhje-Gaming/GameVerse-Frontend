import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/GameEdit.css";
import {Button, Col, Form, FormGroup, Input, Label, Row  } from "reactstrap"

const GameEdit = ({ games, updateGame, destroyGame }) => {
  const { id } = useParams()
  
  const navigate = useNavigate()
  
  const [editGame, setEditGame] = useState({
    title: "",
    rating: "",
    platform: "",
    genre: "",
    developer: "",
    image: "",
    summary: "",
    release_date: "",
  });
  console.log(editGame)

  useEffect(() => {
    const currentGame = games?.find((game) => game.id === +id);
    if (currentGame) {
      setEditGame({
        title: currentGame.title,
        rating: currentGame.rating,
        platform: currentGame.platform,
        genre: currentGame.genre,
        developer: currentGame.developer,
        image: currentGame.image,
        summary: currentGame.summary,
        release_date: currentGame.release_date,
      });
    }
  }, [games, id]);
  
  const handleChange = (e) => {
    setEditGame({ ...editGame, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    updateGame(editGame, +id)
    navigate(`/gameshow/${id}`)
  } 


  return (
    <div className="edit-background-image">
      <div className="edit-form">
        <div className="edit-text">Edit your game:</div>
        <br></br>
        <Form className="edit-page-background-image">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="title">Title:</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter your Game Title"
                  type="text"
                  onChange={handleChange}
                  value={editGame.title}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="rating">Rating:</Label>
                <Input
                  id="rating"
                  name="rating"
                  placeholder="Enter Game rating number"
                  type="text"
                  onChange={handleChange}
                  value={editGame.rating}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="platform">Platform:</Label>
                <Input
                  id="platform"
                  name="platform"
                  placeholder="Enter the Game platform"
                  type="text"
                  onChange={handleChange}
                  value={editGame.platform}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="genre">Genre:</Label>
                <Input
                  id="genre"
                  name="genre"
                  placeholder="Enter the Game genre"
                  type="text"
                  onChange={handleChange}
                  value={editGame.genre}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="developer">Developer:</Label>
                <Input
                  id="developer"
                  name="developer"
                  placeholder="Enter the Game Developer"
                  type="text"
                  onChange={handleChange}
                  value={editGame.developer}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="image">Image:</Label>
                <Input
                  id="image"
                  name="image"
                  placeholder="Enter a Game image link"
                  onChange={handleChange}
                  value={editGame.image}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="summary">Summary:</Label>
                <Input
                  id="summary"
                  name="summary"
                  placeholder="Enter Game summary"
                  type="text"
                  onChange={handleChange}
                  value={editGame.summary}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="release_date">Release Date:</Label>
                <Input
                  id="release_date"
                  name="release_date"
                  placeholder="Enter the Game Release Date"
                  type="date"
                  onChange={handleChange}
                  value={editGame.release_date}
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="update-btn-container">
            <Button
              className="update-btn"
              name="Update Game"
              onClick={handleSubmit}
            >
              Update Game
            </Button>

            <Button
              className="back-btn"
              name="Back"
              href={`/gameshow/${id}`}
            >
              Back
            </Button>
            
            <Button
              className="delete-btn"
              name="Delete Game"
              onClick={() => destroyGame(id)}
            >
              Delete Game
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default GameEdit
   