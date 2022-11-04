import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Navbar">

      <Nav>
        <Logo to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9vfebT8GEBgM30e8AJOJVXYhaGSs6qBEwkwJppoc9w&s"
            alt="logo"
          />
        </Logo>
        <NavMenu>
        <NavLink className="menu-item" to="about" smooth={true}>
        About
      </NavLink>
      <NavLink className="menu-item" to="skills" smooth={true}>
        Skills
      </NavLink>
      <NavLink className="menu-item" to="projects" smooth={true}>
        Projects
      </NavLink>
      <NavLink className="menu-item" to="contact" smooth={true}>
        Contact
      </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
             href="https://drive.google.com/file/d/1Pozvh1pkuZbTwYWUE5uzyPPGXm5AhHXs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
