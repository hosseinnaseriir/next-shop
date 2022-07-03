import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
function ContactForm() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      text,
    };
    const res = await axios.post("/api/email", formData);
  };

  return (
    <Container>
      <h2 className="py-5 border-2 border-border-bottom">Contact Us Form</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>enter your message </Form.Label>
          <Form.Control
            onChange={(e) => setText(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button onClick={handleSubmitForm} variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
