import React, { useEffect, useMemo, useState } from 'react';
import { Layout, Loader } from '../../components';
import {
  Conversations,
  Filters,
  FloatingFooter,
  Navigation,
  NoConversationsSection,
  SearchBar,
} from './sections';
import { useFetchData } from '../../hooks';
import { Conversation, ConversationListResponse } from '../../types';
import { useDebouncedCallback } from '../../utils';

enum PageState {
  LOADING = 'loading',
  LOADED_WITH_CONVERSATIONS = 'loaded_with_conversations',
  LOADED_NO_CONVERSATIONS = 'loaded_no_conversations',
}

const Home = () => {
  const { data, loading } = useFetchData<ConversationListResponse>(
    'experiment/web/list-conversations.json',
  );
  const [pageState, setPageState] = useState<PageState>(PageState.LOADING);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (loading) {
      setPageState(PageState.LOADING);
      return;
    }

    if (data?.conversations) {
      setConversations(data.conversations);
      setPageState(PageState.LOADED_WITH_CONVERSATIONS);
    } else {
      setPageState(PageState.LOADED_NO_CONVERSATIONS);
    }
  }, [data, loading]);

  const debouncedOnSearchHandler = useDebouncedCallback(
    async (content: string) => setSearch(content),
    300,
  );

  const targetConversations = useMemo(() => {
    if (search.length > 0) {
      return conversations.filter((c) => c.name.includes(search));
    }
    return conversations;
  }, [search, conversations]);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <Navigation />
        {/* Search */}
        <SearchBar onSearch={debouncedOnSearchHandler} />
        {/* Filters */}
        <Filters />
        {/* Chat List */}

        {pageState === PageState.LOADING && (
          <div className="w-full h-full flex flex-1 justify-center items-center">
            <Loader />
          </div>
        )}
        {pageState === PageState.LOADED_WITH_CONVERSATIONS && (
          <Conversations conversations={targetConversations} />
        )}
        {pageState === PageState.LOADED_NO_CONVERSATIONS && (
          <NoConversationsSection />
        )}

        {/* Footer Navigation */}
        <FloatingFooter />
      </div>
    </Layout>
  );
};

export default Home;
