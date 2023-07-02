import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Button } from 'reactstrap';
import ReactCardFlip from 'react-card-flip';
import Picture from "../assets/Justin.png";
import PictureTwo from "../assets/YueHan.png";
import PictureThree from "../assets/Henri.png";
import '../styles/AboutUs.css';

const AboutUs = () => {
  const [isFlippedOne, setIsFlippedOne] = useState(false);
  const [isFlippedTwo, setIsFlippedTwo] = useState(false);
  const [isFlippedThree, setIsFlippedThree] = useState(false);

  const handleClickOne = () => {
    setIsFlippedOne(prevState => !prevState);
  };

  const handleClickTwo = () => {
    setIsFlippedTwo(prevState => !prevState);
  };

  const handleClickThree = () => {
    setIsFlippedThree(prevState => !prevState);
  };

  return (
    <main className="containerStyle">
      <Row md="4" sm="2" xs="1">
        <Col className="cardCol">
          <ReactCardFlip isFlipped={isFlippedOne} flipDirection="vertical">
            <Card className='cards'>
              <img className='boxImg' alt="Sample" src={Picture} />
              <CardBody>
                <CardTitle tag="h5">Justin</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Product Manager</CardSubtitle>
                <Button onClick={handleClickOne}>Details</Button>
              </CardBody>
            </Card>
            <Card className='cards'>
              <img className='boxImg2' alt="Sample" src={Picture} />
              <CardBody>
                <CardTitle tag="h5">Justin</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit.
                </CardText>
                <div className="CardB">
                  <Button href="https://www.linkedin.com/in/justinkarpman/" color="primary">LinkedIn</Button>{" "}
                  <Button href="https://github.com/Justinnkar" color="dark">Github</Button>{" "}
                  <Button onClick={handleClickOne}>Details</Button>
                </div>
              </CardBody>
            </Card>
          </ReactCardFlip>
        </Col>
        <Col className="cardCol">
          <ReactCardFlip isFlipped={isFlippedTwo} flipDirection="vertical">
            <Card className='cards'>
              <img className='boxImg' alt="Sample" src={PictureTwo} />
              <CardBody>
                <CardTitle tag="h5">Yue Han</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Tech Lead</CardSubtitle>
                <Button onClick={handleClickTwo}>Details</Button>
              </CardBody>
            </Card>
            <Card className='cards'>
              <img className='boxImg2' alt="Sample" src={PictureTwo} />
              <CardBody>
                <CardTitle tag="h5">Yue Han</CardTitle>
                <CardText>
                  Yue Han is an aspiring Full Stack Developer aiming to master both frontend and backend development. With a goal to launch his own product within the next 5 years, he is driven to continuously learn new technologies, particularly in the field of AI-powered design. Yue Han's passion lies in harnessing cutting-edge technology to create innovative solutions.
                </CardText>
                <div className="CardB">
                  <Button href="https://www.linkedin.com/in/lanyuke/" color="primary">LinkedIn</Button>{" "}
                  <Button href="https://github.com/lanyuke" color="dark">Github</Button>{" "}
                  <Button onClick={handleClickTwo}>Details</Button>
                </div>
              </CardBody>
            </Card>
          </ReactCardFlip>
        </Col>
        <Col className="cardCol">
          <ReactCardFlip isFlipped={isFlippedThree} flipDirection="vertical">
            <Card className='cards'>
              <img className='boxImg' alt="Sample" src={PictureThree} />
              <CardBody>
                <CardTitle tag="h5">Henri</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">Design Lead</CardSubtitle>
                <Button onClick={handleClickThree}>Details</Button>
              </CardBody>
            </Card>
            <Card className='cards'>
              <img className='boxImg2' alt="Sample" src={PictureThree} />
              <CardBody>
                <CardTitle tag="h5">Henri</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit.
                </CardText>
                <div className="CardB">
                  <Button href="https://www.linkedin.com/in/hslambert" color="primary">LinkedIn</Button>{" "}
                  <Button href="https://github.com/henrike32" color="dark">Github</Button>{" "}
                  <Button onClick={handleClickThree}>Details</Button>
                </div>
              </CardBody>
            </Card>
          </ReactCardFlip>
        </Col>
      </Row>
    </main>
  );
};

export default AboutUs;
