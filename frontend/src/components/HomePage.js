import React, { useState } from 'react';
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
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { type: 'sent', text: inputText };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/query/', { text: inputText });
      const botMessage = { type: 'received', text: response.data.response.answer };
      console.log(response.data.response.answer);
      setMessages([...messages, userMessage, botMessage]);
      setInputText('');
    } catch (error) {
      console.error("There was an error sending the message!", error);
    }
  };

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
          {messages.map((message, index) => (
            <div className={`d-flex justify-content-${message.type === 'sent' ? 'end' : 'start'}`}>
              <Alert className="w-50" key={index} variant={message.type === 'sent' ? 'dark' : 'primary'}>
                <p>{message.text}</p>
              </Alert>
            </div>
          ))}
        </Container>

        {/* Do not submit the form by pressing enter key, instead click on the send button */}
        <Form onSubmit={(e) => {e.preventDefault(); handleSend();}}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter a message"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <InputGroup.Text>
              <Button variant="primary" type="submit">Send</Button>{' '}
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
}

export default HomePage;
