import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
  {
    name: 'Carlos M.',
    quote: 'VendPro made it easy to get started. The training and support are top-notch. I’m earning passive income every month!',
  },
  {
    name: 'Linda S.',
    quote: 'We placed a machine in our gym and it’s been a hit. The cashless payment system is a game changer.',
  },
];

function TestimonialsPage() {
  return (
    <Container className="py-12">
      <Row className="mb-8">
        <Col className="text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Customer Success Stories</h1>
          <p className="text-lg text-gray-700">See how VendPro is helping people just like you earn more and stress less.</p>
        </Col>
      </Row>
      <Row>
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
  );
}

export default TestimonialsPage; 