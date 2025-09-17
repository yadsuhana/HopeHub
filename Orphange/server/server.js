const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/orphanage', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Volunteer Schema
const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    skills: { type: String, required: true },
    availability: { type: String, required: true },
    message: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post('/api/volunteer/register', async (req, res) => {
    try {
        const volunteer = new Volunteer(req.body);
        await volunteer.save();

        // Send email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Volunteer Registration',
            html: `
                <h2>New Volunteer Registration</h2>
                <p><strong>Name:</strong> ${volunteer.name}</p>
                <p><strong>Email:</strong> ${volunteer.email}</p>
                <p><strong>Phone:</strong> ${volunteer.phone}</p>
                <p><strong>Age:</strong> ${volunteer.age}</p>
                <p><strong>Skills:</strong> ${volunteer.skills}</p>
                <p><strong>Availability:</strong> ${volunteer.availability}</p>
                <p><strong>Message:</strong> ${volunteer.message || 'No message'}</p>
            `
        };

        // Send confirmation email to volunteer
        const volunteerMailOptions = {
            from: process.env.EMAIL_USER,
            to: volunteer.email,
            subject: 'Volunteer Registration Confirmation',
            html: `
                <h2>Thank you for your interest in volunteering!</h2>
                <p>Dear ${volunteer.name},</p>
                <p>We have received your volunteer application. Our team will review your application and get back to you soon.</p>
                <p>Best regards,<br>Hope Orphanage Team</p>
            `
        };

        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(volunteerMailOptions);

        res.status(201).json({ message: 'Registration successful! Check your email for confirmation.' });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Registration failed. Please try again.' });
    }
});

// Get all volunteers (admin route)
app.get('/api/volunteers', async (req, res) => {
    try {
        const volunteers = await Volunteer.find().sort({ createdAt: -1 });
        res.json(volunteers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching volunteers' });
    }
});

// Update volunteer status (admin route)
app.put('/api/volunteer/:id/status', async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        // Send status update email to volunteer
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: volunteer.email,
            subject: 'Volunteer Application Status Update',
            html: `
                <h2>Volunteer Application Status Update</h2>
                <p>Dear ${volunteer.name},</p>
                <p>Your volunteer application status has been updated to: <strong>${req.body.status}</strong></p>
                <p>Best regards,<br>Hope Orphanage Team</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.json(volunteer);
    } catch (error) {
        res.status(500).json({ message: 'Error updating status' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 