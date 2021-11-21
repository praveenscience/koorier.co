import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

const KooNavBar = () => {
  return (
    <Navbar color="dark" dark expand="md" fixed="top" container>
      <Link to="/" className="navbar-brand">
        <img
          src="https://i.imgur.com/wzqOe1S.png"
          alt="Koorier"
          width="30"
          height="30"
        />
      </Link>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink to="/" exact={true} className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              FAQs
            </DropdownToggle>
            <DropdownMenu right>
              <NavLink to="/faqs" className="dropdown-item">
                All Questions
              </NavLink>
              <NavLink to="/work" className="dropdown-item">
                How it Works?
              </NavLink>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default KooNavBar;
