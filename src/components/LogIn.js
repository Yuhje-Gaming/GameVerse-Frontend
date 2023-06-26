import React from "react"
import { useNavigate } from 'react-router-dom'
import { Form, Col, Label, Input, Button, Row } from "reactstrap"
import "../styles/LoginSignUp.css"

const LogIn = ({ login }) => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo)
    navigate('/')
    e.target.reset()
  }

  return (
    <div
      className="login-form"
    >
      <h5>User Login</h5>
      <Form onSubmit={handleSubmit}>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>

            <Label
              className="visually-hidden"
              for="exampleEmail"
            >
              Email
            </Label>

            <Input
              id="exampleEmail"
              name="email"
              placeholder="user e-mail"
              type="email"
            />
          </Col>

          <Col>
            <Label
              className="visually-hidden"
              for="Password"
            >
              Password
            </Label>

            <Input
              id="examplePassword"
              name="password"
              placeholder="user password"
              type="password"
            />
          </Col>

          <Col>
            <Button
              type="submit"
            >
              Submit
            </Button>
          </Col>

        </Row>
      </Form>

    </div>
  )
}

export default LogIn