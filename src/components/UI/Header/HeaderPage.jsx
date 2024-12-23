import React, { useState } from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import Cart from "../../Cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

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
      <Cart
        show={showCart}
        handleClose={handleCloseCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
};

export default Header;
