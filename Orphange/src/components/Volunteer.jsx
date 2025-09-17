import React, { useState } from 'react';
import { registerVolunteer } from '../services/volunteerService';
import './Volunteer.css';

const Volunteer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        skills: '',
        availability: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Submitting...' });

        try {
            const response = await registerVolunteer(formData);
            setStatus({ type: 'success', message: response.message });
            setFormData({
                name: '',
                email: '',
                phone: '',
                age: '',
                skills: '',
                availability: '',
                message: ''
            });
        } catch (error) {
            setStatus({ type: 'error', message: error.message });
        }
    };

    return (
        <div className="volunteer-container">
            <div className="volunteer-hero">
                <h1>Become a Volunteer</h1>
                <p>Make a difference in the lives of our children</p>
            </div>

            <div className="volunteer-content">
                <div className="volunteer-info">
                    <h2>Why Volunteer With Us?</h2>
                    <ul>
                        <li>Make a meaningful impact in children's lives</li>
                        <li>Gain valuable experience working with children</li>
                        <li>Join a supportive and caring community</li>
                        <li>Develop new skills and grow personally</li>
                    </ul>

                    <h2>Volunteer Roles</h2>
                    <div className="volunteer-roles">
                        <div className="role-card">
                            <h3>Teaching Assistant</h3>
                            <p>Help with homework and educational activities</p>
                        </div>
                        <div className="role-card">
                            <h3>Activity Coordinator</h3>
                            <p>Organize and lead recreational activities</p>
                        </div>
                        <div className="role-card">
                            <h3>Mentor</h3>
                            <p>Provide guidance and support to children</p>
                        </div>
                    </div>
                </div>

                <div className="volunteer-form">
                    <h2>Volunteer Application</h2>
                    {status.message && (
                        <div className={`status-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                                min="18"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="skills">Skills & Experience</label>
                            <textarea
                                id="skills"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                required
                                placeholder="Tell us about your skills and relevant experience"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="availability">Availability</label>
                            <textarea
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                required
                                placeholder="When are you available to volunteer?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Additional Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Any additional information you'd like to share"
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Volunteer; 