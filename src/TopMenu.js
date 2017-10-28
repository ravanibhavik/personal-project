import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

const TopMenu = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav>
        <NavDropdown eventKey={1} title="CLOTHING" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>Shirts</MenuItem>
          <MenuItem eventKey={1.2}>Shorts</MenuItem>
          <MenuItem eventKey={1.3}>Socks</MenuItem>
          <MenuItem eventKey={1.4}>Jako</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown eventKey={1} title="ACCESSORIES" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>Equipments</MenuItem>
          <MenuItem eventKey={1.2}>Footballs</MenuItem>
          <MenuItem eventKey={1.3}>Hats</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default TopMenu;