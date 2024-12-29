import React from 'react';
import { DoubleCheckIcon } from '../Icons';

type MessageStatusProps = {
  delivered: boolean;
  read: boolean;
};

export const MessageStatus = ({ delivered, read }: MessageStatusProps) => {
  return (
    <>
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
    </>
  );
};
