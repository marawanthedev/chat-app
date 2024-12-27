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
      <div className="bg-black w-full h-full"></div>
    </Layout>
  );
};

export default Home;
