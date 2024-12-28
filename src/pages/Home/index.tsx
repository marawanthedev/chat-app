// Home.tsx
import React from 'react';
import { Layout } from '../../components';
import { ChatList, Filters, FloatingFooter, Header, Search } from './sections';
import { useFetchData } from '../../hooks';
import { ConversationListResponse } from '../../types';
const Home = () => {
  const { data } = useFetchData<ConversationListResponse>(
    'experiment/web/list-conversations.json',
  );

  if (data !== null && !data?.conversations) {
    throw new Error('Failed to load conversations');
  }

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
        <ChatList conversations={data?.conversations} />
        {/* Footer Navigation */}
        <FloatingFooter />
      </div>
    </Layout>
  );
};

export default Home;
