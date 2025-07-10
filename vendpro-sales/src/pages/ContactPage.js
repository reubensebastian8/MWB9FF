import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="py-8 md:py-12 px-4">
      <Row className="mb-8">
        <Col className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Contact Us</h1>
          <p className="text-base md:text-lg text-gray-700">Ready to get started or have questions? Fill out the form below and our team will be in touch soon.</p>
        </Col>
      </Row>
      <Row className="justify-center">
        <Col xs={12} md={6}>
          {submitted && <Alert variant="success">Thank you! We’ve received your message and will contact you soon.</Alert>}
          <Form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded shadow-md w-full max-w-md mx-auto">
            <Form.Group className="mb-4" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" value={form.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} value={form.message} onChange={handleChange} required />
            </Form.Group>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 border-0 w-full">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage; 