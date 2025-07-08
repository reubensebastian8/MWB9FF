import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'Adding a VendPro machine to our office was the best decision! Employees love the convenience and it pays for itself.',
  },
  {
    name: 'Mike D.',
    quote: 'I started with one vending machine and now have five. The support and reliability are unmatched.',
  },
  {
    name: 'Jessica R.',
    quote: 'The machine is sleek, easy to use, and my customers are happy. Highly recommend VendPro!',
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 py-16 mb-8">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Maximize Profits with Modern Vending Machines</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700">Unlock passive income and delight your customers or employees with our state-of-the-art vending solutions for soft drinks, candy bars, and chips.</p>
              <Button as={Link} to="/pricing" size="lg" className="bg-blue-600 hover:bg-blue-700 border-0">See Pricing</Button>
            </Col>
            <Col md={6} className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80" alt="Vending Machine" className="rounded-lg shadow-lg w-full max-w-md" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="mb-16">
        <Row className="text-center mb-12">
          <Col>
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Why Choose VendPro?</h2>
            <p className="text-gray-600 text-lg">Our machines are designed for maximum uptime, easy maintenance, and unbeatable ROI.</p>
          </Col>
        </Row>
        <Row className="mb-8">
          <Col md={4} className="mb-6 md:mb-0">
            <Card className="h-full shadow-md border-0">
              <Card.Body>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Smart Inventory</h3>
                <p>Real-time stock alerts and remote monitoring keep your machine full and profitable.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-6 md:mb-0">
            <Card className="h-full shadow-md border-0">
              <Card.Body>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Cashless Payments</h3>
                <p>Accept cards, mobile payments, and more—no more missed sales due to cash-only machines.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-full shadow-md border-0">
              <Card.Body>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Plug & Play</h3>
                <p>Easy setup in minutes. No technical expertise required—just plug in and start earning.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12 mb-16">
        <Container>
          <Row className="text-center mb-8">
            <Col>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">What Our Customers Say</h2>
            </Col>
          </Row>
          <Row className="justify-center">
            {testimonials.map((t, idx) => (
              <Col md={4} key={idx} className="mb-6">
                <Card className="h-full shadow border-0">
                  <Card.Body>
                    <p className="italic mb-2">"{t.quote}"</p>
                    <div className="font-semibold text-blue-700">- {t.name}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Call to Action */}
      <Container className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Ready to Start Earning?</h2>
        <p className="mb-6 text-gray-700">Join hundreds of satisfied owners. Get your vending machine today and watch your passive income grow!</p>
        <Button as={Link} to="/contact" size="lg" className="bg-green-600 hover:bg-green-700 border-0">Get Started</Button>
      </Container>
    </>
  );
}

export default Home; 