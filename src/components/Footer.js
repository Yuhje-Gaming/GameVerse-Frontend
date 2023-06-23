import React from "react"
import { 
  Navbar,
  NavbarBrand, 
  Button 
} from "reactstrap"

import Ylogo from "../assets/Ylogo.png"

const Footer = () => {

  const handleClick = () => {;
    alert(`Hello, there's no AboutMe page yet!!`);
  }

  return (
    <>
      <Navbar className="navbar" color="success" dark fixed="bottom">
        <NavbarBrand href="/">
          <img src={Ylogo} alt="Ylogo png" className="yfooter-logo" />
          <br />
        </NavbarBrand>
        <div>
          <Button
            className="nav-link"
            color="link"
            onClick={handleClick}
          >
            About Us
          </Button>
        </div>
      </Navbar>
    </>
  )
}

export default Footer