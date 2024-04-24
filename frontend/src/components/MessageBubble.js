// MessageBubble.js

import React from 'react';
// import './MessageBubble.css';

const MessageBubble = ({ message }) => {
    const { text, sender } = message;
    const isUserMessage = sender === 'user';

    return (
        <div className={`message-bubble ${isUserMessage ? 'user' : 'bot'}`}>
            {text}
        </div>
    );
};

export default MessageBubble;
