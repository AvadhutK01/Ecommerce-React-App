import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Products</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >About</Nav.Link>
                        <Nav.Link href="#cart">
                            <i className="bi bi-cart"></i> Cart <Badge bg="info">0</Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
