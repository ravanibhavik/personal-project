import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import hudson from './hudson.png';
import { FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './TopNav.css';

const TopNav = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand pullLeft>
          <a href="#" className="pull-left" ><img src={hudson} alt="" /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav pullLeft>
        <Navbar.Form>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit"><Glyphicon glyph="search"/></Button>
        </Navbar.Form>
      </Nav>
      <Nav pullRight>
        <NavItem href="#" eventKey={1}>Contact Us</NavItem>
        <NavItem href="#" eventKey={2}>Create Account</NavItem>
        <NavItem href="#" eventKey={3}>Sign In or Create an account</NavItem>
      </Nav>
    </Navbar>
  )
}

export default TopNav;