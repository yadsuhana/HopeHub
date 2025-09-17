import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">About Hope Orphanage</h1>
      
      <Row className="mb-5">
        <Col md={6}>
          <h2>Our Mission</h2>
          <p className="lead">
            At Hope Orphanage, we are dedicated to providing a loving and nurturing environment for children who have lost their parents or are in need of care. Our mission is to ensure that every child in our care receives the love, education, and support they need to grow into confident and responsible adults.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/happy-children.png"
            alt="Children at Hope Orphanage"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Our History</h2>
          <p>
            Founded in 2010, Hope Orphanage has been a beacon of hope for countless children. What started as a small shelter has grown into a comprehensive care facility that provides not just basic needs but also quality education, healthcare, and emotional support.
          </p>
        </Col>
      </Row>

      <h2 className="text-center mb-4">Our Values</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Love and Care</Card.Title>
              <Card.Text>
                We believe that every child deserves unconditional love and care. Our staff is dedicated to creating a family-like environment where children feel safe and valued.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                We provide quality education and learning opportunities to help children develop their full potential and prepare for a successful future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Community</Card.Title>
              <Card.Text>
                We foster a sense of community and belonging, teaching children the importance of helping others and working together.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Our Team</h2>
          <p>
            Our dedicated team of caregivers, teachers, and support staff work tirelessly to ensure that every child receives the attention and care they need. We believe in continuous training and development to provide the best possible care for our children.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About; 