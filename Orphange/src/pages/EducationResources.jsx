import { Container, Row, Col, Card, ListGroup, Badge, Button } from 'react-bootstrap';
import { 
  FaBook, 
  FaLaptop, 
  FaGraduationCap, 
  FaBriefcase, 
  FaUniversity, 
  FaHandshake, 
  FaCode, 
  FaPaintBrush, 
  FaLanguage, 
  FaChartLine,
  FaHome
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/EducationResources.css';

function EducationResources() {
  return (
    <div className="education-resources-page">
      <header className="bg-primary text-white py-4 mb-4">
        <Container>
          <h1 className="text-center mb-0">Educational Resources</h1>
        </Container>
      </header>

      <Container>
        {/* Online Learning Resources */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Online Learning Resources</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaBook className="resource-icon" />
                  <Card.Title>Khan Academy</Card.Title>
                  <Card.Text>Free online courses in math, science, and more.</Card.Text>
                  <Button 
                    variant="primary" 
                    href="https://www.khanacademy.org" 
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaLaptop className="resource-icon" />
                  <Card.Title>Coursera</Card.Title>
                  <Card.Text>Access to courses from top universities.</Card.Text>
                  <Button 
                    variant="primary" 
                    href="https://www.coursera.org" 
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaGraduationCap className="resource-icon" />
                  <Card.Title>edX</Card.Title>
                  <Card.Text>High-quality courses from leading institutions.</Card.Text>
                  <Button 
                    variant="primary" 
                    href="https://www.edx.org" 
                    target="_blank"
                  >
                    Visit Site
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Homework Help */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Homework Help</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body>
                  <Card.Title>Subject Help</Card.Title>
                  <div className="mb-3">
                    <Badge bg="primary" className="subject-badge me-2">Mathematics</Badge>
                    <Badge bg="success" className="subject-badge me-2">Science</Badge>
                    <Badge bg="info" className="subject-badge me-2">English</Badge>
                    <Badge bg="warning" className="subject-badge">History</Badge>
                  </div>
                  <p>Get help with your homework in various subjects from our volunteer tutors.</p>
                  <Button variant="primary">View Tutor Schedule</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body>
                  <Card.Title>Study Resources</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Study guides and notes</ListGroup.Item>
                    <ListGroup.Item>Practice worksheets</ListGroup.Item>
                    <ListGroup.Item>Video tutorials</ListGroup.Item>
                    <ListGroup.Item>Online quizzes</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary" className="mt-3">Access Resources</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Career Guidance */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Career Guidance</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaBriefcase className="resource-icon" />
                  <Card.Title>Career Exploration</Card.Title>
                  <Card.Text>Discover different career paths and opportunities.</Card.Text>
                  <Button variant="primary">Explore Careers</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaUniversity className="resource-icon" />
                  <Card.Title>College Preparation</Card.Title>
                  <Card.Text>Resources for college applications and scholarships.</Card.Text>
                  <Button variant="primary">View Resources</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaHandshake className="resource-icon" />
                  <Card.Title>Internship Programs</Card.Title>
                  <Card.Text>Find internship opportunities and work experience.</Card.Text>
                  <Button variant="primary">View Opportunities</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Skill Development */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Skill Development Programs</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaCode className="resource-icon" />
                  <Card.Title>Coding</Card.Title>
                  <Card.Text>Learn programming and web development.</Card.Text>
                  <Button variant="primary">View Programs</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaPaintBrush className="resource-icon" />
                  <Card.Title>Art & Design</Card.Title>
                  <Card.Text>Develop creative and artistic skills.</Card.Text>
                  <Button variant="primary">View Programs</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaLanguage className="resource-icon" />
                  <Card.Title>Language Learning</Card.Title>
                  <Card.Text>Learn new languages and communication skills.</Card.Text>
                  <Button variant="primary">View Programs</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <FaChartLine className="resource-icon" />
                  <Card.Title>Business Skills</Card.Title>
                  <Card.Text>Develop entrepreneurship and business skills.</Card.Text>
                  <Button variant="primary">View Programs</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>

      <Link to="/" className="btn btn-primary back-to-home">
        <FaHome className="me-2" /> Back to Home
      </Link>
    </div>
  );
}

export default EducationResources;
