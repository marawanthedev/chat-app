import React from 'react';
import { ChatMessage } from '../../../../types';
import { PhotoMessage, TextMessage } from './components';
import { format } from 'date-fns';
import { Loader } from '../../../../components';

export const MessagesSection = ({ messages }: { messages?: ChatMessage[] }) => {
  if (!messages) {
    return (
      <div
        aria-label="messages are yet to be loading"
        className="max-w-[410px] flex-1 flex items-center justify-center overflow-y-auto bg-cover p-4 space-y-3 bg-[url('src/assets/wa-bg.png')]"
      >
        <Loader />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div
        aria-label="no messages"
        className="max-w-[410px] flex justify-center items-center overflow-y-auto bg-cover p-4 space-y-3 w-full h-full"
      >
        No Messages yet.
      </div>
    );
  }

  // Sort messages by sentAt to ensure chronological order (O(n log n) time complexity)
  const sortedMessages = [...messages].sort(
    (a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime(),
  );

  // Group messages by day (O(n) time complexity)
  const groupedMessages: { date: string; messages: ChatMessage[] }[] = [];

  sortedMessages.forEach((message) => {
    const formattedDate = format(new Date(message.sentAt), 'EEE, MMM d');
    const existingGroup = groupedMessages.find(
      (group) => group.date === formattedDate,
    );

    if (!existingGroup) {
      groupedMessages.push({ date: formattedDate, messages: [message] });
    } else {
      existingGroup.messages.push(message);
    }
  });

  return (
    <div className="max-w-[410px] flex-1 overflow-y-auto w-full bg-cover p-4 space-y-3 my-[50px] bg-[url('/src/assets/wa-bg.png')]">
      {groupedMessages.map(({ date, messages }) => (
        <div key={date}>
          <p className="text-center text-xs text-gray-500 my-2">{date}</p>

          {messages.map((message: ChatMessage) => {
            const { delivered, read, sentAt, sentBy, type, photo, text } =
              message;
            const formattedTime = format(new Date(sentAt), 'HH:mm');

            return (
              <div
                key={message.sentAt}
                className={`flex ${sentBy === 'self' ? 'justify-end' : 'justify-start'} my-2`}
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
      ))}
    </div>
  );
};
