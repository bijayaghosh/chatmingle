const express = require('express');
const app = express();
const cors = require('cors');
const { NlpManager } = require('node-nlp');

const port = 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

const manager = new NlpManager({ languages: ['en'] });

// Train the NLP model
(async () => {
    manager.addDocument('en', 'hello', 'greet');
    manager.addDocument('en', 'hi', 'greet');
    manager.addDocument('en', 'how are you', 'enquiry');

    manager.addAnswer('en', 'greet', 'Hello! How can I help you today?');
    manager.addAnswer('en', 'enquiry', 'I am fine, thanks for asking!');

    // Adds the utterances and intents for the NLP
    manager.addDocument('en', 'goodbye for now', 'greetings.bye');
    manager.addDocument('en', 'bye bye take care', 'greetings.bye');
    manager.addDocument('en', 'okay see you later', 'greetings.bye');
    manager.addDocument('en', 'bye for now', 'greetings.bye');
    manager.addDocument('en', 'i must go', 'greetings.bye');
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'hi', 'greetings.hello');
    manager.addDocument('en', 'howdy', 'greetings.hello');

    // Train also the NLG
    manager.addAnswer('en', 'greetings.bye', 'Till next time');
    manager.addAnswer('en', 'greetings.bye', 'see you soon!');
    manager.addAnswer('en', 'greetings.hello', 'Hey there!');
    manager.addAnswer('en', 'greetings.hello', 'Greetings!');


    // chatgpt
    manager.addDocument('en', 'hello', 'greet');
    manager.addDocument('en', 'hi', 'greet');
    manager.addDocument('en', 'how are you', 'enquiry');
    manager.addDocument('en', 'what is your name', 'identity');
    manager.addDocument('en', 'how can I help you', 'enquiry');
    manager.addDocument('en', 'goodbye', 'farewell');
    manager.addDocument('en', 'bye', 'farewell');
    manager.addDocument('en', 'thanks', 'gratitude');
    manager.addDocument('en', 'What is your site about', 'info');

    // Add answers for each intent
    manager.addAnswer('en', 'greet', 'Hello! How can I help you today?');
    manager.addAnswer('en', 'enquiry', 'I am fine, thanks for asking!');
    manager.addAnswer('en', 'identity', 'My name is ChatBot.');
    manager.addAnswer('en', 'farewell', 'Goodbye! Have a nice day!');
    manager.addAnswer('en', 'gratitude', 'You\'re welcome!');
    manager.addAnswer('en', 'info', 'This is a Chatbot website.');
    manager.addAnswer('en', 'info', 'It is my personal chatbot.');
    manager.addAnswer('en', 'info', 'My name is ChatMingle.');

    await manager.train();
    manager.save();
})();

// API endpoint for querying the NLP model
app.post('/query', async (req, res) => {
    const { text } = req.body;
    const response = await manager.process('en', text);
    return res.json({ response });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
