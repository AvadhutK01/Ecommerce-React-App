import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const firestoreUrl = "https://firestore.googleapis.com/v1/projects/sh-p-f50d3/databases/(default)/documents/ecom";

        const payload = {
            fields: {
                name: { stringValue: formData.name },
                email: { stringValue: formData.email },
                phone: { stringValue: formData.phone }
            }
        };

        try {
            const response = await fetch(firestoreUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
                setFormData({ name: '', email: '', phone: '' });
            } else {
                const errorData = await response.json();
                console.error("Firebase Error:", errorData);
                setStatus({ type: 'danger', message: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus({ type: 'danger', message: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-5 p-4 bg-light rounded shadow">
            <h1 className="text-center mb-4">Contact Us</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {status.message && (
                        <div className={`alert alert-${status.type} alert-dismissible fade show`} role="alert">
                            {status.message}
                            <button type="button" className="btn-close" onClick={() => setStatus({ type: '', message: '' })} aria-label="Close"></button>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg px-5"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
