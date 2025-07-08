import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ProductDetails() {
  return (
    <Container className="py-12">
      <Row className="mb-8">
        <Col className="text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Our Vending Machines</h1>
          <p className="text-lg text-gray-700">Engineered for performance, designed for profit. Explore our range of modern vending machines for snacks and drinks.</p>
        </Col>
      </Row>
      <Row className="mb-8">
        <Col md={6} className="flex justify-center mb-6 md:mb-0">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Snack Vending Machine" className="rounded-lg shadow-lg w-full max-w-xs" />
        </Col>
        <Col md={6}>
          <Card className="shadow-md border-0 mb-4">
            <Card.Body>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Snack & Drink Combo</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Holds up to 300 snacks and 200 drinks</li>
                <li>Energy-efficient cooling system</li>
                <li>Remote inventory management</li>
                <li>ADA compliant and eco-friendly</li>
                <li>Custom branding available</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="shadow-md border-0 mb-4">
            <Card.Body>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Technical Specifications</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Dimensions: 72"H x 39"W x 33"D</li>
                <li>Weight: 650 lbs</li>
                <li>Power: 110V standard outlet</li>
                <li>Payment: Cash, card, mobile</li>
                <li>Warranty: 2 years parts & labor</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-md border-0 mb-4">
            <Card.Body>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Perfect For</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Offices & break rooms</li>
                <li>Gyms & recreation centers</li>
                <li>Schools & universities</li>
                <li>Apartment complexes</li>
                <li>Retail stores & more</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails; 