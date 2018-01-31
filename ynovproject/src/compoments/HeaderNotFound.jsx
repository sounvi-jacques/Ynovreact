import React from 'react';
import { Navbar, Nav, NavItem,Button } from 'react-bootstrap';


class HeaderNotFound extends React.Component {

    render(){

        return(

        <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="/login">
                App
                </a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem
                eventKey={1}
                href={`/login`}>
                Home
                </NavItem>
                <NavItem
                eventKey={2}
                href={`/login`}>
                se connecter
                </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        )


    }




}

export default HeaderNotFound;