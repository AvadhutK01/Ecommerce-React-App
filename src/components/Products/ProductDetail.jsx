import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import productsArr from '../../data/products';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = productsArr.find(p => p.id === productId);

    if (!product) {
        return (
            <Container className="mt-5 text-center">
                <h2>Product not found!</h2>
            </Container>
        );
    }

    return (
        <Container className="mt-5 p-4 bg-light rounded shadow">
            <Row>
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
                    </Card>
                    <Row>
                        {product.images.map((img, idx) => (
                            <Col key={idx} xs={4} className="mb-3">
                                <img
                                    src={img}
                                    alt={`${product.title} ${idx}`}
                                    className="img-fluid rounded border shadow-sm"
                                    style={{ height: '100px', width: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={6}>
                    <h1 className="mb-3">{product.title}</h1>
                    <h3 className="text-primary mb-4">${product.price}</h3>
                    <div className="mb-5">
                        <p className="lead">
                            This is a beautiful piece of art that brings life and color to any space.
                            Crafted with passion and attention to detail.
                        </p>
                    </div>

                    <h4 className="mb-3">Customer Reviews</h4>
                    <ListGroup variant="flush" className="bg-transparent">
                        {product.reviews.map(review => (
                            <ListGroup.Item key={review.id} className="bg-transparent border-bottom px-0">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="fw-bold">{review.user}</span>
                                    <Badge bg="warning" text="dark">
                                        {review.rating} ★
                                    </Badge>
                                </div>
                                <p className="mb-1 text-muted small">{review.comment}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
