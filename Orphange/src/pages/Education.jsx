import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaBookOpen, FaChalkboardTeacher, FaGraduationCap, FaCheckCircle, FaStar, FaPalette, FaUsers } from 'react-icons/fa';
import '../styles/Education.css';

function Education() {
  return (
    <Container className="py-5 education-section-bg">
      {/* Hero Section */}
      <div className="education-hero text-center mb-5">
        <span className="education-icon"><FaBookOpen /></span>
        <h1 className="education-title">Education at Hope Orphanage</h1>
        <div className="education-underline mx-auto mb-2"></div>
        <div className="education-subtitle">Empowering children through holistic learning, creativity, and life skills.</div>
      </div>

      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <h2 className="section-header"><FaChalkboardTeacher className="me-2 text-primary" />Our Educational Approach</h2>
          <p className="lead">
            At Hope Orphanage, we believe that education is the key to breaking the cycle of poverty and providing children with a brighter future. Our comprehensive educational program focuses on both academic excellence and personal development.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/art-class.jpg"
            alt="Education at Hope Orphanage"
            className="img-fluid rounded education-hero-img"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="section-header"><FaGraduationCap className="me-2 text-success" />Academic Programs</h2>
          <p>
            We provide quality education from primary to secondary levels, with a curriculum that meets national standards. Our dedicated teachers ensure that each child receives individual attention and support to reach their full potential.
          </p>
        </Col>
      </Row>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 education-card">
            <Card.Body>
              <Card.Title><FaStar className="me-2 text-warning" />Primary Education</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Basic literacy and numeracy</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Science and social studies</ListGroup.Item>
                <ListGroup.Item><FaPalette className="me-2 text-info" />Art and music</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Physical education</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 education-card">
            <Card.Body>
              <Card.Title><FaGraduationCap className="me-2 text-success" />Secondary Education</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Advanced mathematics and sciences</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Language and literature</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Computer skills</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Career guidance</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 education-card">
            <Card.Body>
              <Card.Title><FaUsers className="me-2 text-success" />Vocational Training</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Computer skills</ListGroup.Item>
                <ListGroup.Item><FaPalette className="me-2 text-info" />Art and craft</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Basic business skills</ListGroup.Item>
                <ListGroup.Item><FaCheckCircle className="me-2 text-primary" />Life skills training</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="section-header"><FaPalette className="me-2 text-info" />Extracurricular Activities</h2>
          <p>
            We believe in holistic development, which is why we offer a variety of extracurricular activities:
          </p>
          <ul className="education-list">
            <li><FaCheckCircle className="me-2 text-primary" />Sports and physical education</li>
            <li><FaCheckCircle className="me-2 text-primary" />Music and dance classes</li>
            <li><FaCheckCircle className="me-2 text-primary" />Art and craft workshops</li>
            <li><FaCheckCircle className="me-2 text-primary" />Debate and public speaking</li>
            <li><FaCheckCircle className="me-2 text-primary" />Community service projects</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="section-header"><FaBookOpen className="me-2 text-primary" />Educational Support</h2>
          <p>
            We provide additional support to ensure every child succeeds:
          </p>
          <ul className="education-list">
            <li><FaCheckCircle className="me-2 text-primary" />Individual tutoring sessions</li>
            <li><FaCheckCircle className="me-2 text-primary" />Educational field trips</li>
            <li><FaCheckCircle className="me-2 text-primary" />Library and computer lab access</li>
            <li><FaCheckCircle className="me-2 text-primary" />Scholarship opportunities</li>
            <li><FaCheckCircle className="me-2 text-primary" />Career counseling</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Education; 