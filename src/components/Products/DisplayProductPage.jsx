import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DisplayProductPage = ({ productsArr }) => {
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
                                <Card>
                                    <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>${product.price}</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
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
