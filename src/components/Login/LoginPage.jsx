import React, { useState, useRef } from 'react';
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useAuth();
    const navigate = useNavigate();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        setIsLoading(true);

        const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
        const authBaseUrl = process.env.REACT_APP_AUTH_URL;
        const endpoint = isLogin ? 'signInWithPassword' : 'signUp';
        const url = `${authBaseUrl}:${endpoint}?key=${apiKey}`;

        try {
            const response = await axios.post(url, {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            });

            setIsLoading(false);

            if (response.status === 200) {
                const data = response.data;
                authCtx.login(data.idToken, data.email);
                navigate('/products');
            }
        } catch (error) {
            setIsLoading(false);
            let errorMessage = 'Authentication failed!';
            if (error.response && error.response.data && error.response.data.error) {
                errorMessage = error.response.data.error.message;
            }
            alert(errorMessage);
        }
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '400px' }} className="shadow-lg border-0">
                <Card.Body className="p-4">
                    <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="dark" type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <Spinner animation="border" size="sm" />
                                ) : isLogin ? (
                                    'Login'
                                ) : (
                                    'Create Account'
                                )}
                            </Button>
                        </div>
                    </Form>
                    <div className="text-center mt-3">
                        <Button
                            variant="link"
                            className="text-decoration-none text-muted"
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? "Don't have an account? Sign Up" : 'Have an account? Login'}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;
