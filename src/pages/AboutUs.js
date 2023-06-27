import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Button } from 'reactstrap'
import Picture from "../assets/NotFoundPage.avif"
import PictureTwo from "../assets/GameVerseHeader.png"
import '../styles/AboutUs.css'

const AboutUs = () => {

  return (
    <main className="containerStyle">
      <Row md="4" sm="2" xs="1">
        <Col className="cardCol">
          <Card className='cards'>
            <img className='boxImg' alt="Sample" src={Picture} />
            <CardBody>
              <CardTitle tag="h5">Justin</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Product Manager</CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit.
              </CardText>
              <Button href="https://www.linkedin.com/in/justinkarpman/" color="primary">LinkedIn</Button>{" "}
              <Button href="https://github.com/Justinnkar" color="dark">Github</Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className='cards'>
            <img className='boxImg' alt="Sample" src={PictureTwo} />
            <CardBody>
              <CardTitle tag="h5">Yue Han</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Tech Lead</CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit.
              </CardText>
              <Button href="https://www.linkedin.com/in/lanyuke/" color="primary">LinkedIn</Button>{" "}
              <Button href="https://github.com/lanyuke" color="dark">Github</Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className='cards'>
            <img className='boxImg' alt="Sample" src={Picture} />
            <CardBody>
              <CardTitle tag="h5">Henri</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">Design Lead</CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit.
              </CardText>
              <Button href="https://www.linkedin.com/in/hslambert" color="primary">LinkedIn</Button>{" "}
              <Button href="https://github.com/henrike32" color="dark">Github</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </main>
  )
}

export default AboutUs;
