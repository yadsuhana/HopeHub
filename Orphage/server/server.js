const mongoose = require('mongoose');
const transporter = require('../config/nodemailer');

const contactMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

// Route to handle contact form submissions
app.post('/api/contact/message', async (req, res) => {
    try {
        const newMessage = new ContactMessage(req.body);
        await newMessage.save();

        // Send email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Message: ${newMessage.subject}`,
            html: `
                <h2>New Contact Message Received</h2>
                <p><strong>Name:</strong> ${newMessage.name}</p>
                <p><strong>Email:</strong> ${newMessage.email}</p>
                <p><strong>Subject:</strong> ${newMessage.subject}</p>
                <p><strong>Message:</strong><br>${newMessage.message}</p>
                <p>Received on: ${newMessage.createdAt.toLocaleString()}</p>
            `
        };

        await transporter.sendMail(adminMailOptions);

        res.status(201).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Contact Message Error:', error);
        res.status(500).json({ message: 'Failed to send your message. Please try again later.' });
    }
});

// Get all contact messages (admin route)
app.get('/api/contact/messages', async (req, res) => {
    try {
        const messages = await ContactMessage.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact messages' });
    }
}); 