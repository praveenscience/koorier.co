import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const KooNavBar = () => {
  return (
    <Navbar color="dark" dark expand="md" fixed="top">
      <NavbarBrand href="/">
        <img
          src="https://i.imgur.com/wzqOe1S.png"
          alt="Koorier"
          width="30"
          height="30"
        />
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/About">About</NavLink>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              FAQs
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>All Questions</DropdownItem>
              <DropdownItem>How it Works?</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default KooNavBar;
