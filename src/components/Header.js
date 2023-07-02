import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import $ from "jquery";

function Header({ currentUser, logout }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavTriggerClick = () => {
    $(".navTrigger").toggleClass("active");
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="head-navbar" color="transparent">
      <Nav className="navbar-brand-centered">
        <div className="header-with-gradient-line"></div>
        <div className="logo-container">
              <NavLink to="/" className="navbar-gameverse">
                GAME VERSE
              </NavLink>
            {currentUser && (
              <>
                <h5 className="login-email">Welcome, {currentUser.email}!</h5>
              </>
              )}
            {!currentUser && (
            <>
            </>
            )}
        </div>
      </Nav>

      <div className="navTrigger" onClick={handleNavTriggerClick}>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="drop-down" justified>
          {currentUser && (
            <>
              <NavItem>
                <NavLink to="/gameindex" className="nav-link head-text">
                  VIEW GAMES
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/gamenew" className="nav-link head-text">
                  ADD NEW GAME
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/" className="nav-link head-text" onClick={logout}>
                  LOGOUT
                </NavLink>
              </NavItem>
            </>
          )}

          {!currentUser && (
            <>
              <NavItem>
                <NavLink to="/gameindex" className="nav-link head-text">
                  VIEW GAMES
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/login" className="nav-link head-text">
                  LOGIN
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/signup" className="nav-link head-text">
                  SIGNUP
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header; 