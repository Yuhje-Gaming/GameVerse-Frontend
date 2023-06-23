import React from "react"
import { Navbar, NavbarBrand, Button } from "reactstrap"
import YLogo from "../assets/YLogo.gif"

const Footer = () => {
  return(
    <>
        <Navbar
          className="navbar"
          color="success"
          dark
          fixed="bottom"
        >
          <NavbarBrand href="/">
            <img
              src={YLogo}
              alt="Ylogo logo gif"
              className="yfooter-logo"
            />
            <br></br>
          </NavbarBrand>
         <div>
           <Button
              color="link"
              outline
              >
              About Us
          </Button>
         </div>
        </Navbar>
    </>
  )
}

export default Footer