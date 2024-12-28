import React from 'react';
import { Conversation } from '../../../../../types';
import { DoubleCheckIcon } from '../../../../../components/Icons';

type TextMessageProps = Omit<
  Extract<Conversation, { type: 'text' }>,
  'name' | 'lastMessageAt' | 'type'
>;

export const TextMessage = ({ text, delivered, read }: TextMessageProps) => {
  return (
    <div className="flex gap-x-1 items-center">
      {delivered && (
        <span aria-label={read ? 'Read' : 'Delivered'}>
          <DoubleCheckIcon color={read ? '#3497F9' : 'currentColor'} />
        </span>
      )}
      <span aria-label="message content">{text.message}</span>
    </div>
  );
};
