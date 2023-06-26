import React from "react"
import { 
  Navbar,
  NavbarBrand, 
  Button 
} from "reactstrap"

import Ylogo from "../assets/Ylogo.png"

const Footer = () => {

  return (
    <>
      <Navbar className="foot-navbar" color="dark" fixed="bottom">
        <NavbarBrand href="/">
          <img src={Ylogo} alt="Ylogo png" className="yfooter-logo" />

          <Button
            href="/aboutus"
            className="about-button"
            color="light"
            outline
            size="sm"
          >
            About Us
          </Button>
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default Footer