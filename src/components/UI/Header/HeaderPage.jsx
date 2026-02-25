import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';

const Header = () => {
    const { cartItems } = useCart();
    const authCtx = useAuth();
    const navigate = useNavigate();
    const [showCart, setShowCart] = React.useState(false);

    const handleShowCart = () => {
        if (authCtx.isLoggedIn) {
            setShowCart(true);
        } else {
            navigate('/login');
        }
    };
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
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/products" className="nav-link">Products</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                            {!authCtx.isLoggedIn && (
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            )}
                            {authCtx.isLoggedIn && (
                                <Nav.Link onClick={authCtx.logout}>Logout</Nav.Link>
                            )}
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
