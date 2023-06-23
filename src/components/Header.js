import React, { useState, currentUser } from "react";
import { 
  Navbar, 
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavbarText,
} from "reactstrap"
import { NavLink } from "react-router-dom"
import GameVerse from "../assets/GameVerse.gif"
import GameverseFont from "../assets/GameverseFont.png"
import Login from "../assets/Login.png"
import SignUp from "../assets/SignUp.png"
import ViewAll from "../assets/ViewAll.png"
import Logout from "../assets/Logout.png"
import AddNew from "../assets/AddNew.png"


function Header(currentUser) {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <Navbar 
      color="dark"
      dark
      >
      <NavbarBrand href="/">
        <img
            src={GameVerse}
            alt="Game Verse logo gif"
            className="gameverse-logo"
        />
        
        <img 
            src={GameverseFont}
            alt="Gameverse fonts"
            className="gameverse-font"
        />
        </NavbarBrand>
          <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
              
            <Nav className="drop-down" justified>

                {currentUser && (
                  <>
                    <NavItem>
                      <NavLink to="/gameindex" className="nav-link">
                        <img 
                          src={ViewAll} 
                          height="15px" 
                        />
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink to="/gamenew" className="nav-link">
                        <img 
                          src={AddNew} 
                          height="15px" 
                        />
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink to="/" className="nav-link">
                        <img 
                          src={Logout} 
                          height="15px" 
                        />
                      </NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavbarText>{currentUser.username}</NavbarText>
                    </NavItem>
                  </>
                )}

            
                {!currentUser && (
                  <>
                    
                  <NavItem>
                    <NavLink to="/gameindex" className="nav-link">
                      <img 
                        src={ViewAll}
                        height="15px"
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/login" className="nav-link">
                      <img 
                        src={Login}
                        height="15px"
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/signup" className="nav-link">
                      <img 
                        src={SignUp}
                        height="15px"
                      />
                    </NavLink>
                  </NavItem>  
                  </>
                )}
              
              </Nav>

              <NavbarText class="navbar-text">
                Work in progress! 
              </NavbarText>

            </Collapse>
    </Navbar>
  )
}


export default Header;