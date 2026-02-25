import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from './components/UI/Header/HeaderPage';
import './App.css';
import Footer from "./components/UI/Footer/FooterPage";
import { AuthContextProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Lazy loading components
const HomePage = lazy(() => import('./components/Home/HomePage'));
const ProductsPage = lazy(() => import('./components/Products/ProductsPage'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const ProductDetail = lazy(() => import('./components/Products/ProductDetail'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));

const AppRoutes = () => {
    const authCtx = useAuth();

    return (
        <Suspense fallback={
            <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        }>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={authCtx.isLoggedIn ? <ProductsPage /> : <Navigate to="/login" />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/product/:productId" element={authCtx.isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};

const App = () => {
    return (
        <AuthContextProvider>
            <CartProvider>
                <Router>
                    <Header />
                    <AppRoutes />
                    <Footer />
                </Router>
            </CartProvider>
        </AuthContextProvider>
    );
};

export default App;
