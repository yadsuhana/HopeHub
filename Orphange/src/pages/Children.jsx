import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaBirthdayCake, FaPalette, FaQuoteLeft, FaUsers, FaCheckCircle, FaChild } from 'react-icons/fa';
import '../styles/Children.css';

function Children() {
  return (
    <Container className="py-5 children-section-bg">
      <div className="children-header text-center mb-5">
        <span className="children-icon">👧👦</span>
        <h1 className="children-title">Our Children</h1>
        <div className="children-underline mx-auto mb-2"></div>
        <div className="children-subtitle">Each child at Hope Orphanage has a unique story and potential. We are committed to providing them with the love, care, and opportunities they need to thrive and build a bright future.</div>
      </div>
      <Row className="g-4 mb-5">
        <Col md={6} lg={4}>
          <Card className="h-100 child-card child-card-accent-warning">
            <span className="child-badge bg-warning"><FaChild className="me-1" />Dreamer</span>
            <div className="child-img-wrapper portrait">
              <Card.Img variant="top" src="/anjali.jpeg" alt="Anjali" className="card-img-top portrait" />
            </div>
            <Card.Body className="text-center">
              <h4 className="child-name mb-2 text-primary"><FaStar className="me-2 text-warning child-star" />Anjali</h4>
              <div className="child-age mb-1"><FaBirthdayCake className="me-1 text-secondary" />Age: 12 years</div>
              <div className="child-interests mb-2"><FaPalette className="me-1 text-info" /><b>Interests:</b> Art, Music, and Science</div>
              <div className="child-desc">Anjali is a bright and creative girl who loves to express herself through art and music. She dreams of becoming a scientist one day.</div>
              <div className="child-quote mt-2"><FaQuoteLeft className="me-1 text-muted" /><em>One day, I will discover something new!</em></div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="h-100 child-card child-card-accent-primary">
            <span className="child-badge bg-primary"><FaChild className="me-1" />Achiever</span>
            <div className="child-img-wrapper">
              <Card.Img variant="top" src="/rahul.jpeg" alt="Rahul" className="card-img-top" />
            </div>
            <Card.Body className="text-center">
              <h4 className="child-name mb-2 text-primary"><FaStar className="me-2 text-warning child-star" />Rahul</h4>
              <div className="child-age mb-1"><FaBirthdayCake className="me-1 text-secondary" />Age: 14 years</div>
              <div className="child-interests mb-2"><FaPalette className="me-1 text-info" /><b>Interests:</b> Sports, Mathematics, and Technology</div>
              <div className="child-desc">Rahul is an energetic boy who excels in sports and academics. He has a keen interest in technology and wants to become a software engineer.</div>
              <div className="child-quote mt-2"><FaQuoteLeft className="me-1 text-muted" /><em>I want to build amazing things with computers!</em></div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="h-100 child-card child-card-accent-success">
            <span className="child-badge bg-success"><FaUsers className="me-1" />Team Spirit</span>
            <div className="child-img-wrapper">
              <Card.Img variant="top" src="/happy-children.png" alt="Group of Children" className="card-img-top" />
            </div>
            <Card.Body className="text-center">
              <h4 className="child-name mb-2 text-primary"><FaUsers className="me-2 text-success child-star" />Our Family</h4>
              <div className="child-desc">At Hope Orphanage, we believe in creating a family environment where children support and care for each other. Our children form strong bonds and create lasting friendships.</div>
              <div className="child-quote mt-2"><FaQuoteLeft className="me-1 text-muted" /><em>Together, we are stronger!</em></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="children-divider my-5"><span className="divider-icon"><FaCheckCircle className="text-primary" /></span></div>

      <Row className="mb-5">
        <Col>
          <h2 className="section-header"><FaCheckCircle className="me-2 text-primary" />Daily Life</h2>
          <p>
            Our children follow a structured daily routine that includes:
          </p>
          <ul className="children-list">
            <li><FaCheckCircle className="me-2 text-success" />Morning exercise and meditation</li>
            <li><FaCheckCircle className="me-2 text-success" />School and educational activities</li>
            <li><FaCheckCircle className="me-2 text-success" />Extracurricular activities and hobbies</li>
            <li><FaCheckCircle className="me-2 text-success" />Study time and homework assistance</li>
            <li><FaCheckCircle className="me-2 text-success" />Recreational activities and playtime</li>
            <li><FaCheckCircle className="me-2 text-success" />Family-style meals and bonding time</li>
          </ul>
        </Col>
      </Row>

      <div className="children-divider my-5"><span className="divider-icon"><FaStar className="text-warning" /></span></div>

      <Row>
        <Col>
          <h2 className="section-header"><FaStar className="me-2 text-warning" />Success Stories</h2>
          <p>
            Many of our children have gone on to achieve great success in their lives. Some have pursued higher education, while others have started their own businesses or found meaningful employment. We are proud of each and every one of them and continue to support them even after they leave our care.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Children; 