import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { sendMessage } from '../services/contactService';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await sendMessage(formData);
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <Row className="mb-5">
        <Col md={6}>
          <h2>Get in Touch</h2>
          <p className="lead">
            We'd love to hear from you! Whether you have questions about our programs, want to volunteer, or are interested in supporting our cause, please don't hesitate to reach out.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/happy-children.png"
            alt="Contact Hope Orphanage"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <section className="contact-info-section mb-5 p-4">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center contact-info-card">
              <Card.Body>
                <FaMapMarkerAlt className="contact-icon mb-2" />
                <Card.Title>Address</Card.Title>
                <Card.Text>
                  123 Hope Street,<br />
                  Supaul, Bihar 854412<br />
                  India
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center contact-info-card">
              <Card.Body>
                <FaPhone className="contact-icon mb-2" />
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  Phone: 9876543210<br />
                  <FaEnvelope className="me-1" /> info@hopeorphanage.org<br />
                  Fax: 9876543211
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center contact-info-card">
              <Card.Body>
                <FaClock className="contact-icon mb-2" />
                <Card.Title>Office Hours</Card.Title>
                <Card.Text>
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="contact-form-section mb-5 p-4">
        <Row>
          <Col md={6}>
            <h2>Send Us a Message</h2>
            {status && <div className={`alert ${status.includes('successfully') ? 'alert-success' : status.includes('Failed') ? 'alert-danger' : 'alert-info'}`}>{status}</div>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Enter your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" className="w-100 mt-2">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Visit Us</h2>
            <div className="map-container mb-4">
              <iframe
                title="Hope Orphanage Location"
                src="https://www.google.com/maps?q=123+Hope+Street,+Supaul,+Bihar+854412,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Contact; 