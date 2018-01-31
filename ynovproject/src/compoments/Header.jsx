import React from 'react';

import { Navbar, Nav, NavItem,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
       
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">
              App
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href={`/home`}>
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              href={`/login`}>
              se deconnecter
            </NavItem>
            <NavItem
              eventKey={3}
              href="/video">
              Video
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    );
  }
}

export default Header;
