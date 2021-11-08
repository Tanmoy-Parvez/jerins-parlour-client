import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="banner-bg" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="100"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Our Portfolio</Nav.Link>
                        <Nav.Link href="">Our Team</Nav.Link>
                        <Nav.Link href="">Contact Us</Nav.Link>
                        <button className="btn regular-btn">Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;