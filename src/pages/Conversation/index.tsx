// Conversation.tsx
import React, { useState } from 'react';
import { Layout } from '../../components';

const Conversation = () => {
  const [messages, setMessages] = useState([
    { sender: 'John', text: 'Hey! How are you?' },
    { sender: 'You', text: 'I am good, thanks!' },
    { sender: 'John', text: 'What are you up to?' },
    // Add more messages here
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    setMessages([...messages, { sender: 'You', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* Message List */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.sender === 'You'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-gray-100 flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Conversation;
