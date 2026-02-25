import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/UI/Header/HeaderPage';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import HomePage from './components/Home/HomePage';
import ProductsPage from './components/Products/ProductsPage';
import ProductDetail from './components/Products/ProductDetail';
import Footer from "./components/UI/Footer/FooterPage";
import LoginPage from './components/Login/LoginPage';
import { AuthContextProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const AppRoutes = () => {
    const authCtx = useAuth();

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={authCtx.isLoggedIn ? <ProductsPage /> : <Navigate to="/login" />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product/:productId" element={authCtx.isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
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
