import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const DisplayProductPage = ({ productsArr }) => {
    const { addToCart } = useCart();
    const [loadingProductId, setLoadingProductId] = useState(null);

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const handleAddToCart = async (product) => {
        setLoadingProductId(product.id);
        await addToCart(product);
        setLoadingProductId(null);
    };

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
                                            onClick={() => handleAddToCart(product)}
                                            className="mt-2"
                                            disabled={loadingProductId === product.id}
                                        >
                                            {loadingProductId === product.id ? (
                                                <>
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                        className="me-2"
                                                    />
                                                    Adding...
                                                </>
                                            ) : (
                                                'Add to Cart'
                                            )}
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
