import React from 'react';
import { useFetchData } from '../../hooks';
import { ChatProps } from '../../types';
import { MessagesSection, HeaderSection, InputSection } from './sections';

const Chat = () => {
  const { data } = useFetchData<ChatProps>('experiment/web/list-messages.json');

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen ">
      <HeaderSection contact={data?.contact} />
      <MessagesSection messages={data?.messages} />
      <InputSection />
    </div>
  );
};

export default Chat;
