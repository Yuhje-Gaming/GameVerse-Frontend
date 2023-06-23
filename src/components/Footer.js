import React from "react"
import { 
  Navbar,
  NavbarBrand, 
  Button 
} from "reactstrap"

import Ylogo from "../assets/Ylogo.png"

const Footer = () => {
a

  return (
    <>
      <Navbar className="navbar" color="dark" fixed="bottom">
        <NavbarBrand href="/">
          <img src={Ylogo} alt="Ylogo png" className="yfooter-logo" />
          <br />
          <Button 
            href="/aboutus"
            className="nav-link"
            color="light" >
            About Us
          </Button>
        </NavbarBrand>
      </Navbar>
       
        
    </>
  )
}

export default Footer