import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const pricingOptions = [
  {
    title: 'Starter',
    price: '$3,499',
    features: [
      '1 Snack & Drink Combo Machine',
      'Remote Monitoring',
      'Cashless Payment Enabled',
      '2-Year Warranty',
      'Free Training',
    ],
  },
  {
    title: 'Pro',
    price: '$6,499',
    features: [
      '2 Snack & Drink Combo Machines',
      'Custom Branding',
      'Remote Monitoring',
      'Cashless Payment Enabled',
      '2-Year Warranty',
      'Free Training',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: [
      '5+ Machines',
      'Custom Solutions',
      'Dedicated Success Manager',
      'Lifetime Support',
      'Custom Branding',
      'Remote Monitoring',
    ],
  },
];

function PricingPage() {
  return (
    <Container className="py-12">
      <Row className="mb-8">
        <Col className="text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Pricing & Packages</h1>
          <p className="text-lg text-gray-700">Choose the plan that fits your goals. All packages include setup, training, and support.</p>
        </Col>
      </Row>
      <Row className="justify-center">
        {pricingOptions.map((option, idx) => (
          <Col md={4} key={idx} className="mb-6">
            <Card className="h-full shadow-lg border-0">
              <Card.Body>
                <h3 className="text-xl font-bold text-blue-700 mb-2">{option.title}</h3>
                <div className="text-3xl font-bold mb-4">{option.price}</div>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  {option.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Button as={Link} to="/contact" size="md" className="bg-blue-600 hover:bg-blue-700 border-0 w-full">Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center mt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Need a custom solution?</h2>
          <p className="mb-4 text-gray-700">Contact us for bulk pricing, custom branding, or unique requirements.</p>
          <Button as={Link} to="/contact" size="lg" className="bg-green-600 hover:bg-green-700 border-0">Contact Sales</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PricingPage; 