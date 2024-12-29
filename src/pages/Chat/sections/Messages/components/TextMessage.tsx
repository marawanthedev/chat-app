import React from 'react';
import { ChatMessage } from '../../../../../types';
import { MessageStatus } from '../../../../../components';

type TextMessageProps = Omit<
  Extract<ChatMessage, { type: 'text' }>,
  'type' | 'sentBy'
> & {
  color: string;
};

export const TextMessage = ({
  sentAt,
  text,
  delivered,
  read,
  color,
}: TextMessageProps) => {
  return (
    <div
      className={`flex gap-x-4 p-2 border-box justify-between items-end rounded`}
      role="region"
      aria-labelledby="text-message"
      style={{ backgroundColor: `${color}` }}
    >
      <span id="text-message" className="text-base" aria-live="polite">
        {text}
      </span>
      <div className="flex items-center gap-x-2">
        <span
          className="text-[11px] text-[rgba(0,0,0,.5)]"
          aria-label={`Sent at ${sentAt}`}
        >
          {sentAt}
        </span>
        <MessageStatus delivered={delivered} read={read} />
      </div>
    </div>
  );
};
