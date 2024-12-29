import React from 'react';
import { Conversation } from '../../../../../types';
import { MessageStatus } from '../../../../../components';

type TextMessageProps = Omit<
  Extract<Conversation, { type: 'text' }>,
  'name' | 'lastMessageAt' | 'type'
>;

export const TextMessage = ({ text, delivered, read }: TextMessageProps) => {
  return (
    <div role="listitem" className="flex gap-x-1 items-center">
      <MessageStatus delivered={delivered} read={read} />
      <span aria-label="message content">{text.message}</span>
    </div>
  );
};
