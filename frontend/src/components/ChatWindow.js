// ChatWindow.js

import React, { useState } from 'react';
// import './ChatWindow.css';
import MessageBubble from './MessageBubble';

const ChatWindow = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
        }
    };

    return (
        <div className="chat-window">
            <div className="message-container">
                {messages.map((message, index) => (
                    <MessageBubble key={index} message={message} />
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleMessageSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;
