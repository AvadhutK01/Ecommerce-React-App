import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mt-5 p-4 bg-light rounded shadow">
            <h1 className="text-center mb-4">About Us</h1>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img 
                        src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg" 
                        alt="About Us" 
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-6">
                    <p className="lead">
                        Welcome to our Ecommerce website! We are committed to providing you with the best shopping experience. 
                        From a wide range of products to user-friendly navigation, we strive to make online shopping seamless and enjoyable.
                    </p>
                    <p>
                        Our mission is to bring quality products to your doorstep while offering exceptional customer service. 
                        Whether you're looking for the latest gadgets, fashion trends, or everyday essentials, we've got you covered.
                    </p>
                    <p>
                        Join us in this journey and explore the convenience and joy of shopping from the comfort of your home.
                    </p>
                </div>
            </div>

            <div className="text-center mt-4">
                <h3>Why Choose Us?</h3>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Wide Variety</h5>
                                <p className="card-text">
                                    We offer a diverse range of products to suit all your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Affordable Prices</h5>
                                <p className="card-text">
                                    Enjoy premium quality at prices that won't break the bank.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Customer Support</h5>
                                <p className="card-text">
                                    Our dedicated support team is here to help you 24/7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
