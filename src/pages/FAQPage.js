import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'Most customers are up and running within 2 weeks of ordering. We handle delivery, setup, and training.'
  },
  {
    question: 'Do I need any technical skills?',
    answer: 'No technical expertise required! Our machines are plug-and-play, and we provide full training and support.'
  },
  {
    question: 'What about maintenance?',
    answer: 'Our machines are designed for reliability. If you ever need help, our support team is available 24/7.'
  },
  {
    question: 'How do I restock the machine?',
    answer: 'You can restock at your convenience. Our smart inventory system will alert you when supplies are low.'
  },
  {
    question: 'Can I customize the machine?',
    answer: 'Yes! We offer custom branding and configuration options to fit your needs.'
  },
];

function FAQPage() {
  return (
    <Container className="py-12">
      <Row className="mb-8">
        <Col className="text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-700">Got questions? We’ve got answers. If you don’t see your question here, <a href="/contact" className="text-blue-600 underline">contact us</a>.</p>
        </Col>
      </Row>
      <Row className="justify-center">
        <Col md={8}>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQPage; 