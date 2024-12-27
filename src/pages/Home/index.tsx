// Home.tsx
import React from 'react';
import { Layout } from '../../components';

const Home = () => {
  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!' },
    { id: 3, name: 'Bob Johnson', lastMessage: 'Lets' },
    // Add more conversations here
  ];

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Conversations
        </h1>
        <ul className="space-y-4">
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <h2 className="text-lg font-medium text-gray-700">
                {conversation.name}
              </h2>
              <p className="text-sm text-gray-500">
                {conversation.lastMessage}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
