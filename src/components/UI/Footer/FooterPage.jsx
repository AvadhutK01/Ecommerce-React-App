import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-4">
                        <h5>Contact Us</h5>
                        <p>
                            Ecommerce Website, <br />
                            Shriwardhan <br />
                            India, 402110 <br />
                            Email: kelaskaravadhut052@gmail.com
                        </p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a >Home</a></li>
                            <li><a >Products</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Follow Us</h5>
                        <p>Stay connected on social media:</p>
                    </Col>
                </Row>
            </Container>
            <div className="bg-secondary text-center py-2">
                <p>&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
