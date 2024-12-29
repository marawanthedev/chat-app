import React from 'react';
import { ChatMessage } from '../../../../../types';
import { DoubleCheckIcon } from '../../../../../components/Icons';

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
  console.log({ color });
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
        {delivered && (
          <span
            aria-label={read ? 'Read' : 'Delivered'}
            role="img"
            aria-live="polite"
          >
            <DoubleCheckIcon
              color={read ? '#3497F9' : 'currentColor'}
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </div>
  );
};
