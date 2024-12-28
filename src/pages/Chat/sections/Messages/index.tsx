import React from 'react';
import { ChatMessage } from '../../../../types';
import { PhotoMessage, TextMessage } from './components';
import { format } from 'date-fns';
import { Loader } from '../../../../components';

export const MessagesSection = ({ messages }: { messages?: ChatMessage[] }) => {
  if (!messages) {
    return (
      <div className="flex-1 flex items-center justify center overflow-y-auto bg-cover p-4 space-y-3  bg-[url('/assets/wa-bg.png')]">
        <Loader />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex justify-center items-center overflow-y-auto bg-cover p-4 space-y-3 w-full h-full">
        No Messages yet.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-cover p-4 space-y-3  bg-[url('/assets/wa-bg.png')]">
      {/* only show when there is actual messages , this could be derived from earliest message, and we could group messages into day based and put a label on top of each one that includes date details */}
      <p className="text-center text-xs text-gray-500">Fri, Jul 26</p>

      {messages.map((message: ChatMessage) => {
        const { delivered, read, sentAt, sentBy, type, photo, text } = message;
        const formattedTime = format(new Date(sentAt), 'HH:mm');

        return (
          <div
            key={message.sentAt}
            className={`flex ${sentBy === 'self' ? 'justify-end' : 'justify-start'} space-x-3`}
          >
            {type === 'text' && (
              <TextMessage
                text={text}
                sentAt={formattedTime}
                delivered={delivered}
                read={read}
                color={`${sentBy === 'self' ? '#DCF7C5' : '#FAFAFA'}`}
              />
            )}
            {type === 'photo' && (
              <PhotoMessage
                delivered={delivered}
                sentAt={formattedTime}
                read={read}
                photo={photo}
                color={`${sentBy === 'self' ? '#DCF7C5' : '#FAFAFA'}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
