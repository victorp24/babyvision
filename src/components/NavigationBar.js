import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavigationBar.css';

{/*This is a simple custom Navigation bar that we display on every page. Our brand "BabyVision" is
displayed on the left, and clicking it takes you to the home page. We have three pages or navigation items
which are Home, Monitor, and Lullaby Station. Clicking Home takes you to the home page, Monitor takes you
to the monitor page, and Lullaby Station takes you to the Lullaby Station page*/}

class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href = "/" className = "white">BabyVision</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/monitor">Monitor</Nav.Link>
                        <Nav.Link href="/lullabystation">Lullaby Station</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;