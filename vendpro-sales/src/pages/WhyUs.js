import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function WhyUs() {
  return (
    <Container className="py-8 md:py-12 px-4">
      <Row className="mb-8">
        <Col className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why Choose VendPro?</h1>
          <p className="text-base md:text-lg text-gray-700">We're more than just machines—we're your partner in success. Here's why hundreds trust VendPro for their vending needs.</p>
        </Col>
      </Row>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="h-full shadow-md border-0">
          <Card.Body>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Unmatched ROI</h3>
            <p>Our clients see payback in as little as 6 months. With low overhead and high demand, vending is a proven path to passive income.</p>
          </Card.Body>
        </Card>
        <Card className="h-full shadow-md border-0">
          <Card.Body>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">Rock-Solid Reliability</h3>
            <p>Our machines are built to last, with 99.9% uptime and 24/7 remote monitoring. Spend less time fixing, more time earning.</p>
          </Card.Body>
        </Card>
        <Card className="h-full shadow-md border-0">
          <Card.Body>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-700">World-Class Support</h3>
            <p>From setup to scaling, our team is with you every step. Free training, lifetime tech support, and a dedicated success manager.</p>
          </Card.Body>
        </Card>
      </div>
      <Row>
        <Col className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">Ready to join the vending revolution?</h2>
          <p className="mb-6 text-gray-700 text-base md:text-lg">Contact us today and discover how easy it is to start earning with VendPro.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default WhyUs; 