import React from "react"
import { useNavigate } from 'react-router-dom'
import { Form, Col, Label, Input, Button, Row } from "reactstrap"
import "../styles/Login.css"
import { motion } from "framer-motion"

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
    <div className="login-page">

      <div className="login-form">

        <div className="login-text">
          User Login
        </div>

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
                LogIn!
              </Button>
            </Col>

          </Row>
        </Form>

      </div>

      <div>
        <motion.h3 className="animate-text1"
          animate={{ x: [0, 100, -25],
          y: [0, 50, 0],
          opacity: 2, 
          scale: 1 
          }}
          transition={{
            duration: 10,
            delay: 0,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 1, scale: 0.5 }}
          whileHover={{ scale: 2 }}
        >
          I miss you.... I wish you come more often..
        </motion.h3>
      </div>`

    </div>
  )
}

export default LogIn