import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './TopMenu.css';

class TopMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: ""
    }
    this.showDept = this.showDept.bind(this);
    this.hideDept = this.hideDept.bind(this);
  }

  showDept() {
    this.setState({open: "open"}); 
  }

  hideDept() {
    this.setState({open: ""});
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Departments" className="DeptDropDown" 
              onMouseOver={this.showDept} 
              onMouseLeave={this.hideDept}
              open={this.state.open}
              noCaret
              >
              <MenuItem eventKey={1.1}>Electronics & Computers</MenuItem>
              <MenuItem eventKey={1.2}>Sports & Outdoors</MenuItem>
            </NavDropdown>
          </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopMenu;