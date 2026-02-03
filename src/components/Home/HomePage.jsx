import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const slideIn = useSpring({
        from: { transform: 'translateY(50px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        delay: 200,
    });

    return (
        <animated.div style={fadeIn}>
            {/* Hero Section */}
            <div className="bg-dark text-white text-center py-5">
                <Container>
                    <animated.div style={slideIn}>
                        <h1 className="display-4 mb-3">Welcome to Our Ecommerce Store</h1>
                        <p className="lead mb-4">
                            Discover amazing products at great prices. Shop with confidence and enjoy a seamless shopping experience.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => navigate('/products')}
                        >
                            Shop Now
                        </Button>
                    </animated.div>
                </Container>
            </div>

            {/* How It Works Section */}
            <Container className="my-5">
                <h2 className="text-center mb-5">How to Buy</h2>
                <Row>
                    <Col md={3} className="mb-4">
                        <Card className="h-100 text-center border-0 shadow-sm">
                            <Card.Body>
                                <div className="mb-3">
                                    <i className="bi bi-search" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                                </div>
                                <Card.Title>1. Browse Products</Card.Title>
                                <Card.Text>
                                    Explore our wide range of products and find what you need.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Card className="h-100 text-center border-0 shadow-sm">
                            <Card.Body>
                                <div className="mb-3">
                                    <i className="bi bi-cart-plus" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                                </div>
                                <Card.Title>2. Add to Cart</Card.Title>
                                <Card.Text>
                                    Select your favorite items and add them to your shopping cart.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Card className="h-100 text-center border-0 shadow-sm">
                            <Card.Body>
                                <div className="mb-3">
                                    <i className="bi bi-credit-card" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                                </div>
                                <Card.Title>3. Checkout</Card.Title>
                                <Card.Text>
                                    Review your order and proceed to secure payment.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Card className="h-100 text-center border-0 shadow-sm">
                            <Card.Body>
                                <div className="mb-3">
                                    <i className="bi bi-truck" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                                </div>
                                <Card.Title>4. Delivery</Card.Title>
                                <Card.Text>
                                    Sit back and relax while we deliver your order to your doorstep.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Features Section */}
            <div className="bg-light py-5">
                <Container>
                    <h2 className="text-center mb-5">Why Shop With Us</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <div className="text-center">
                                <i className="bi bi-shield-check" style={{ fontSize: '3rem', color: '#198754' }}></i>
                                <h4 className="mt-3">Secure Shopping</h4>
                                <p className="text-muted">
                                    Your data is protected with industry-standard encryption.
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="text-center">
                                <i className="bi bi-arrow-repeat" style={{ fontSize: '3rem', color: '#198754' }}></i>
                                <h4 className="mt-3">Easy Returns</h4>
                                <p className="text-muted">
                                    Not satisfied? Return your purchase hassle-free within 30 days.
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="text-center">
                                <i className="bi bi-headset" style={{ fontSize: '3rem', color: '#198754' }}></i>
                                <h4 className="mt-3">24/7 Support</h4>
                                <p className="text-muted">
                                    Our customer support team is always here to help you.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Call to Action */}
            <Container className="text-center my-5 py-5">
                <h2 className="mb-4">Ready to Start Shopping?</h2>
                <p className="lead mb-4">
                    Browse our collection and find your perfect products today!
                </p>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/products')}
                >
                    View Products
                </Button>
            </Container>
        </animated.div>
    );
};

export default HomePage;
