import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Alert
} from 'react-bootstrap';
import axios from 'axios';
import './HomePage.css';

function HomePage() {
  let navigate = useNavigate();



  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ChatMingle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Container>
          {/* Sent message */}
          <Alert variant="light">
            <p>Hello</p>
          </Alert>

          {/* Received message */}
          <Alert variant="primary">
            <p>Hi! How can I help you today?</p>
          </Alert>

          {/* Input box and button to send the message */}
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter a message"
              />
              <InputGroup.Text>
                <Button variant="primary">Send</Button>{' '}
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Container>


        {/* <div className="button-container">
          <Button variant="primary">Chat</Button>{' '}
        </div> */}
      </Container>
    </>
  );
}

export default HomePage;
