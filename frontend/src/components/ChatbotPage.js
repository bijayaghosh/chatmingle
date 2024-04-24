// ChatbotPage.js

import React, { useState } from 'react';
// import './ChatbotPage.css';
import ChatWindow from './ChatWindow';

const ChatbotPage = () => {
    const [showChat, setShowChat] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="chatbot-page">
            <button className="chat-toggle-button" onClick={toggleChat}>
                Chat
            </button>
            {showChat && <ChatWindow />}
        </div>
    );
};

export default ChatbotPage;
