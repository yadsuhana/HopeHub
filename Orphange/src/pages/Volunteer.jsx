import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaStar, FaBirthdayCake, FaPalette, FaQuoteLeft } from 'react-icons/fa';
import '../styles/Volunteer.css';

const indianVolunteers = [
  {
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    phone: "+91 98765 43210",
    address: {
      street: "123 Gandhi Road",
      city: "Mumbai",
      state: "Maharashtra",
      zipcode: "400001"
    }
  },
  {
    name: "Rahul Patel",
    email: "rahul.patel@gmail.com",
    phone: "+91 98765 43211",
    address: {
      street: "456 Nehru Street",
      city: "Delhi",
      state: "Delhi",
      zipcode: "110001"
    }
  },
  {
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    phone: "+91 98765 43212",
    address: {
      street: "789 Tagore Lane",
      city: "Kolkata",
      state: "West Bengal",
      zipcode: "700001"
    }
  },
  {
    name: "Arjun Singh",
    email: "arjun.singh@gmail.com",
    phone: "+91 98765 43213",
    address: {
      street: "321 Patel Road",
      city: "Ahmedabad",
      state: "Gujarat",
      zipcode: "380001"
    }
  },
  {
    name: "Meera Reddy",
    email: "meera.reddy@gmail.com",
    phone: "+91 98765 43214",
    address: {
      street: "654 Bose Street",
      city: "Chennai",
      state: "Tamil Nadu",
      zipcode: "600001"
    }
  },
  {
    name: "Vikram Kumar",
    email: "vikram.kumar@gmail.com",
    phone: "+91 98765 43215",
    address: {
      street: "987 Ambedkar Road",
      city: "Bangalore",
      state: "Karnataka",
      zipcode: "560001"
    }
  }
];

const children = [
  {
    name: 'Rahul',
    age: 14,
    interests: 'Sports, Mathematics, and Technology',
    image: '/rahul.jpeg',
    badge: 'Achiever',
    badgeColor: 'primary',
    description: 'Rahul is an energetic boy who excels in sports and academics. He has a keen interest in technology and wants to become a software engineer.',
    quote: 'I want to build amazing things with computers!'
  },
  {
    name: 'Anjali',
    age: 12,
    interests: 'Art, Music, and Science',
    image: '/anjali.jpeg',
    portrait: true,
    badge: 'Dreamer',
    badgeColor: 'warning',
    description: 'Anjali is a bright and creative girl who loves to express herself through art and music. She dreams of becoming a scientist one day.',
    quote: 'One day, I will discover something new!'
  },
  {
    name: 'Our Family',
    age: '',
    interests: '',
    image: '/happy-children.png',
    badge: 'Team Spirit',
    badgeColor: 'success',
    description: '',
    quote: 'Together, we are stronger!'
  }
];

function VolunteerCard({ volunteer }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <h5 className="card-title"><FaUser className="me-2 text-primary" />{volunteer.name}</h5>
          <p className="card-text mb-2">
            <FaEnvelope className="me-2 text-secondary" />{volunteer.email}<br />
            <FaPhone className="me-2 text-secondary" />{volunteer.phone}<br />
            <FaMapMarkerAlt className="me-2 text-secondary" />{volunteer.address.street}, {volunteer.address.city}, {volunteer.address.state} - {volunteer.address.zipcode}
          </p>
          <Button variant="primary" href={`mailto:${volunteer.email}`}>Contact Volunteer</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function ChildCard({ child }) {
  const imgClass = `child-img ${child.name.toLowerCase()}${child.portrait ? ' portrait' : ''}`;
  const wrapperClass = `child-img-wrapper${child.portrait ? ' portrait' : ''}`;
  return (
    <Col md={5} className="mb-4 mx-auto">
      <div className="child-card-outer">
        <Card className="h-100 shadow-sm child-card">
          {child.badge && (
            <span className={`child-badge bg-${child.badgeColor}`}>{child.badge}</span>
          )}
          <div className={wrapperClass}>
            <Card.Img variant="top" src={child.image} alt={child.name} className={imgClass} />
          </div>
          <Card.Body className="text-center">
            <h4 className="child-name mb-2 text-primary">
              <FaStar className="me-2 text-warning child-star" />{child.name}
            </h4>
            {child.age && <div className="child-age mb-1"><FaBirthdayCake className="me-1 text-secondary" />Age: {child.age} years</div>}
            {child.interests && <div className="child-interests mb-2"><FaPalette className="me-1 text-info" /><b>Interests:</b> {child.interests}</div>}
            {child.description && <div className="child-desc">{child.description}</div>}
            {child.quote && <div className="child-quote mt-2"><FaQuoteLeft className="me-1 text-muted" /><em>{child.quote}</em></div>}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

function GreetingClock() {
  const [greeting, setGreeting] = useState('');
  const [clock, setClock] = useState('');

  useEffect(() => {
    function updateGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good Morning');
      else if (hour < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    }
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      setClock(`${hours}:${minutes}:${seconds} ${ampm}`);
    }
    updateGreeting();
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <h4 id="welcome-message" className="fw-semibold text-primary">{greeting}, Welcome to Hope Orphanage!</h4>
      <div id="real-time-clock" className="text-secondary">{clock}</div>
    </div>
  );
}

function Volunteer() {
  return (
    <Container className="py-5">
      <GreetingClock />
      <h1 className="text-center mb-5">Volunteer With Us</h1>

      <Row className="mb-5">
        <Col md={6}>
          <h2>Make a Difference</h2>
          <p className="lead">
            Join our team of dedicated volunteers and help make a positive impact in the lives of our children. Your time, skills, and compassion can help create a brighter future for those in need.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/community-service.jpg"
            alt="Volunteers at Hope Orphanage"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      {/* Volunteer Cards */}
      <section className="volunteer-section mb-5 p-4">
        <h2 className="text-center mb-4">Meet Our Volunteers</h2>
        <Row id="volunteer-cards">
          {indianVolunteers.map((vol, idx) => (
            <VolunteerCard key={idx} volunteer={vol} />
          ))}
        </Row>
      </section>

      <section className="volunteer-section mb-5 p-4 volunteer-section-bg">
        <h2 className="text-center mb-4">Volunteer Roles</h2>
        <Row className="g-4 mb-5 mt-5">
          <Col md={4}>
            <Card className="h-100 volunteer-role-card">
              <Card.Body className="text-center">
                <FaUser className="volunteer-role-icon mb-2 text-primary" />
                <Card.Title>Teaching</Card.Title>
                <Card.Text>
                  Help children with their studies, homework, and educational activities. Share your knowledge and skills in various subjects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 volunteer-role-card">
              <Card.Body className="text-center">
                <FaStar className="volunteer-role-icon mb-2 text-warning" />
                <Card.Title>Mentoring</Card.Title>
                <Card.Text>
                  Provide guidance and support to children, helping them develop life skills and build confidence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 volunteer-role-card">
              <Card.Body className="text-center">
                <FaUser className="volunteer-role-icon mb-2 text-success" />
                <Card.Title>Activities</Card.Title>
                <Card.Text>
                  Lead or assist with extracurricular activities like sports, arts, music, and other recreational programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <Row className="g-4 mb-5 mt-5">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Teaching</Card.Title>
              <Card.Text>
                Help children with their studies, homework, and educational activities. Share your knowledge and skills in various subjects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Mentoring</Card.Title>
              <Card.Text>
                Provide guidance and support to children, helping them develop life skills and build confidence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Activities</Card.Title>
              <Card.Text>
                Lead or assist with extracurricular activities like sports, arts, music, and other recreational programs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <section className="volunteer-section mb-5 p-4">
        <Row>
          <Col>
            <h2>Volunteer Requirements</h2>
            <ul>
              <li>Minimum age of 18 years</li>
              <li>Background check clearance</li>
              <li>Commitment to regular volunteering schedule</li>
              <li>Passion for working with children</li>
              <li>Good communication skills</li>
              <li>Willingness to learn and adapt</li>
            </ul>
          </Col>
        </Row>
      </section>

      <section className="featured-section mb-5 p-4">
        <Row>
          <Col md={6}>
            <h2>Volunteer Application</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Area of Interest</Form.Label>
                <Form.Select>
                  <option>Teaching</option>
                  <option>Mentoring</option>
                  <option>Activities</option>
                  <option>Administrative Support</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Availability</Form.Label>
                <Form.Select>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Both</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tell us about yourself</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Why do you want to volunteer with us?" />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg">
                Submit Application
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Benefits of Volunteering</h2>
            <ul>
              <li>Make a meaningful difference in children's lives</li>
              <li>Develop new skills and gain experience</li>
              <li>Meet like-minded people and build connections</li>
              <li>Personal growth and fulfillment</li>
              <li>Learn about child development and care</li>
              <li>Contribute to your community</li>
            </ul>
            <p className="mt-4">
              For more information about volunteering opportunities, please contact our volunteer coordinator at <a href="mailto:volunteer@hopeorphanage.org">volunteer@hopeorphanage.org</a>
            </p>
          </Col>
        </Row>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center">
        <h2 className="mb-3">Ready to Make a Difference?</h2>
        <p className="lead mb-4">Join us as a volunteer and help transform lives at Hope Orphanage.</p>
        <Button variant="primary" size="lg" href="#">Become a Volunteer</Button>
      </section>
    </Container>
  );
}

export default Volunteer; 