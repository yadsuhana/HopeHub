import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="hero-content">
              <h1 className="display-4 fw-bold">Welcome to Hope Orphanage</h1>
              <p className="lead">Providing love, care, and education to children in need.</p>
              <div className="hero-buttons">
                <a href="/donate" className="btn btn-primary btn-lg me-3">Donate Now</a>
                <a href="/volunteer" className="btn btn-outline-primary btn-lg">Volunteer</a>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="/happy-children.png"
                alt="Happy Children"
                className="img-fluid rounded hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="mission-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="section-title">Our Mission</h2>
              <p className="lead">
                At Hope Orphanage, we are dedicated to providing a loving and nurturing environment for children who have lost their parents or are in need of care. Our mission is to ensure that every child receives the love, education, and support they need to grow into confident and responsible adults.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Activities Carousel */}
      <section className="activities-section py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Our Activities</h2>
          <Carousel className="mb-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/happy-children.png"
                alt="Happy Children"
              />
              <Carousel.Caption>
                <h3>Bringing Smiles to Every Child</h3>
                <p>Creating a loving and nurturing environment for children to thrive</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/basketball.jpg"
                alt="Sports Activities"
              />
              <Carousel.Caption>
                <h3>Sports & Recreation</h3>
                <p>Building confidence and teamwork through sports activities</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/music-dance.jpg"
                alt="Music and Dance"
              />
              <Carousel.Caption>
                <h3>Music & Dance</h3>
                <p>Celebrating life through music, dance, and cultural activities</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Activities Grid */}
      <section className="activities-grid py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 activity-card">
                <Card.Img variant="top" src="/art-class.jpg" alt="Art and Craft" />
                <Card.Body>
                  <Card.Title>Art and Craft Workshops</Card.Title>
                  <Card.Text>
                    Children participate in weekly art and craft sessions where they learn painting, drawing, and crafting. These activities help them express their creativity and build confidence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 activity-card">
                <Card.Img variant="top" src="/music-dance.jpg" alt="Music and Dance" />
                <Card.Body>
                  <Card.Title>Music and Dance Classes</Card.Title>
                  <Card.Text>
                    We offer music and dance classes to nurture the artistic talents of our children. From traditional dances to modern music, children explore various forms of artistic expression.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 activity-card">
                <Card.Img variant="top" src="/basketball.jpg" alt="Sports" />
                <Card.Body>
                  <Card.Title>Sports and Physical Education</Card.Title>
                  <Card.Text>
                    Regular sports activities like football, cricket, and yoga are organized to promote physical fitness and teamwork among the children.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h2 className="section-title">Make a Difference Today</h2>
              <p className="lead mb-4">
                Your support can change a child's life. Whether through donations or volunteering, you can help us provide better care and opportunities for our children.
              </p>
              <div className="cta-buttons">
                <a href="/donate" className="btn btn-primary btn-lg me-3">Donate Now</a>
                <a href="/volunteer" className="btn btn-outline-primary btn-lg">Become a Volunteer</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home; 