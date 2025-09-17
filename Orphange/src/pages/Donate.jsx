import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaHandHoldingHeart, FaGift, FaUserFriends, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import '../styles/Donate.css';

function Donate() {
  return (
    <Container className="py-5 donate-page">
      <h1 className="text-center mb-5 fw-bold donate-title">Support Our Children</h1>

      {/* Hero Section */}
      <Row className="mb-5 align-items-center donate-hero">
        <Col md={6} className="mb-4 mb-md-0">
          <h2 className="fw-semibold">Your Donation Makes a Difference</h2>
          <p className="lead">
            Every contribution, no matter how small, helps us provide better care, education, and opportunities for our children. Your support can change lives and create a brighter future.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/happy-children.png"
            alt="Children at Hope Orphanage"
            className="img-fluid rounded donate-hero-img"
          />
        </Col>
      </Row>

      {/* Donation Options */}
      <section className="donate-options-section py-4 mb-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 donate-option-card text-center">
              <Card.Body>
                <FaHandHoldingHeart className="donate-icon mb-3" />
                <Card.Title>Monthly Support</Card.Title>
                <Card.Text>
                  Become a monthly donor and help us provide consistent support to our children.
                </Card.Text>
                <Button variant="primary" size="lg">₹2,000/month</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 donate-option-card text-center">
              <Card.Body>
                <FaGift className="donate-icon mb-3" />
                <Card.Title>One-time Donation</Card.Title>
                <Card.Text>
                  Make a one-time contribution to support our immediate needs and projects.
                </Card.Text>
                <Button variant="primary" size="lg">Donate Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 donate-option-card text-center">
              <Card.Body>
                <FaUserFriends className="donate-icon mb-3" />
                <Card.Title>Sponsor a Child</Card.Title>
                <Card.Text>
                  Sponsor a child's education, healthcare, and daily needs.
                </Card.Text>
                <Button variant="primary" size="lg">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* How Your Donation Helps */}
      <section className="donate-impact-section py-4 mb-5 bg-light rounded">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-semibold"><FaCheckCircle className="me-2 text-success" />How Your Donation Helps</h2>
            <ul className="donate-list">
              <li>Education and school supplies</li>
              <li>Healthcare and medical expenses</li>
              <li>Food and nutrition</li>
              <li>Clothing and personal items</li>
              <li>Extracurricular activities</li>
              <li>Facility maintenance and improvements</li>
            </ul>
          </Col>
          <Col md={6}>
            <h2 className="fw-semibold"><FaInfoCircle className="me-2 text-primary" />Other Ways to Support</h2>
            <ul className="donate-list">
              <li>In-kind donations (clothes, books, toys)</li>
              <li>Volunteer your time and skills</li>
              <li>Corporate partnerships</li>
              <li>Fundraising events</li>
              <li>Legacy giving</li>
            </ul>
            <p className="mt-4">
              For more information about donations or to discuss specific giving options, please contact our donation team at <a href="mailto:donations@hopeorphanage.org">donations@hopeorphanage.org</a>
            </p>
          </Col>
        </Row>
      </section>

      {/* Donation Form and QR Code */}
      <section className="donate-form-section py-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6} className="mb-4 mb-lg-0">
            <Card className="p-4 shadow donate-form-card">
              <Card.Body>
                <h2 className="text-center mb-4 fw-semibold">Donation Form</h2>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Donation Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter amount" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Payment Method</Form.Label>
                    <Form.Select>
                      <option>Credit Card</option>
                      <option>Debit Card</option>
                      <option>Bank Transfer</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit" size="lg" className="w-100 mt-2">
                    Donate Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* QR Code Section */}
          <Col md={8} lg={4} className="text-center">
            <Card className="p-4 shadow donate-form-card">
              <Card.Body>
                <h2 className="text-center mb-4 fw-semibold">Donate via QR Code</h2>
                <img 
                  src="OR.jpeg" // **REPLACE WITH YOUR QR CODE IMAGE PATH**
                  alt="Scan to Donate"
                  className="img-fluid donate-qr-code"
                  style={{ maxWidth: '250px', height: 'auto' }}
                />
                <p className="mt-3">Scan the QR code to make a quick donation.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Donate; 