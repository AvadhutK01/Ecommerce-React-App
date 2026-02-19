import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header/HeaderPage';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import HomePage from './components/Home/HomePage';
import ProductsPage from './components/Products/ProductsPage';
import Footer from "./components/UI/Footer/FooterPage";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
