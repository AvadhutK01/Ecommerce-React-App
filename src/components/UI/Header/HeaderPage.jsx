import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import Cart from '../../Cart/Cart';
import { useCart } from '../../../context/CartContext';

const Header = () => {
    const { cartItems } = useCart(); 
    const [showCart, setShowCart] = React.useState(false);

    const handleShowCart = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    const totalCartItems = cartItems.length;

    return (
        <>
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
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link onClick={handleShowCart}>
                                <i className="bi bi-cart"></i> Cart <Badge bg="info">{totalCartItems}</Badge>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={showCart} handleClose={handleCloseCart} />
        </>
    );
};

export default Header;
