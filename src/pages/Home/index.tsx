// Home.tsx
import React from 'react';
import { Layout } from '../../components';
import { ChatList, Filters, FloatingFooter, Header, Search } from './sections';

const Home = () => {
  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!' },
    { id: 3, name: 'Bob Johnson', lastMessage: 'Lets' },
    // Add more conversations here
  ];

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <Header />
        {/* Search */}
        <Search />
        {/* Filters */}
        <Filters />
        {/* Chat List */}
        <ChatList />
        {/* Footer Navigation */}
        <FloatingFooter />
      </div>
    </Layout>
  );
};

export default Home;
