import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const DisplayProductPage = ({ productsArr }) => {
    const { addToCart } = useCart();
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
        <animated.div style={fadeIn}>
            <Container className="my-4">
                <h2 className="text-center mb-4">Our Products</h2>
                <Row>
                    {productsArr.map((product, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <animated.div style={fadeIn}>
                                <Card className="h-100 shadow-sm">
                                    <Link to={`/product/${product.id}`}>
                                        <Card.Img
                                            variant="top"
                                            src={product.imageUrl}
                                            alt={product.title}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </Link>
                                    <Card.Body className="d-flex flex-column">
                                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Card.Title style={{ cursor: 'pointer' }}>{product.title}</Card.Title>
                                        </Link>
                                        <Card.Text className="mt-auto">${product.price}</Card.Text>
                                        <Button
                                            variant="primary"
                                            onClick={() => addToCart(product)}
                                            className="mt-2"
                                        >
                                            Add to Cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </animated.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </animated.div>
    );
};

export default DisplayProductPage;
