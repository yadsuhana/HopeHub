import React, { useState, useEffect } from 'react';
import { getVolunteers, updateVolunteerStatus } from '../services/volunteerService';
import { getContactMessages } from '../services/contactService';
import './Admin.css';

const Admin = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const volunteersData = await getVolunteers();
            const messagesData = await getContactMessages();
            setVolunteers(volunteersData);
            setMessages(messagesData);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch data');
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            await updateVolunteerStatus(id, newStatus);
            fetchData();
        } catch (err) {
            setError('Failed to update volunteer status');
        }
    };

    if (loading) return <div className="admin-loading">Loading...</div>;
    if (error) return <div className="admin-error">{error}</div>;

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>

            <section className="admin-section">
                <h2>Volunteer Applications</h2>
                <div className="volunteers-list">
                    {volunteers.length === 0 ? (
                        <p className="no-data">No volunteer applications found.</p>
                    ) : (
                        volunteers.map((volunteer) => (
                            <div key={volunteer._id} className="volunteer-card">
                                <div className="volunteer-header">
                                    <h2>{volunteer.name}</h2>
                                    <span className={`status-badge ${volunteer.status}`}>
                                        {volunteer.status}
                                    </span>
                                </div>
                                <div className="volunteer-details">
                                    <p><strong>Email:</strong> {volunteer.email}</p>
                                    <p><strong>Phone:</strong> {volunteer.phone}</p>
                                    <p><strong>Age:</strong> {volunteer.age}</p>
                                    <p><strong>Skills:</strong> {volunteer.skills}</p>
                                    <p><strong>Availability:</strong> {volunteer.availability}</p>
                                    {volunteer.message && (
                                        <p><strong>Message:</strong> {volunteer.message}</p>
                                    )}
                                    <p><strong>Applied on:</strong> {new Date(volunteer.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="volunteer-actions">
                                    <select
                                        value={volunteer.status}
                                        onChange={(e) => handleStatusUpdate(volunteer._id, e.target.value)}
                                        className="status-select"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            <section className="admin-section">
                <h2>Contact Messages</h2>
                <div className="messages-list">
                    {messages.length === 0 ? (
                        <p className="no-data">No contact messages found.</p>
                    ) : (
                        messages.map((message) => (
                            <div key={message._id} className="message-card">
                                <h3>{message.subject}</h3>
                                <p><strong>From:</strong> {message.name} ({message.email})</p>
                                <p><strong>Received on:</strong> {new Date(message.createdAt).toLocaleString()}</p>
                                <p>{message.message}</p>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default Admin; 