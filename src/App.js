import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/UI/Header/HeaderPage';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import MainPage from './components/Main/MainPage';
import Footer from "./components/UI/Footer/FooterPage";
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/products" element={<div>Products Page</div>} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
