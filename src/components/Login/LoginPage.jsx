import React, { useState, useRef } from 'react';
import { Container, Form, Button, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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

        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwDsvQguErZLZzPuUX33gtYeXV8tUUFWg';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwDsvQguErZLZzPuUX33gtYeXV8tUUFWg';
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setIsLoading(false);

            const data = await response.json();

            if (response.ok) {
                authCtx.login(data.idToken);
                navigate('/products');
            } else {
                let errorMessage = 'Authentication failed!';
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                }
                alert(errorMessage);
            }
        } catch (error) {
            setIsLoading(false);
            alert('Something went wrong. Please try again later.');
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
