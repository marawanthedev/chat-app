import React from 'react';
import { DoubleCheckIcon } from '../Icons';

type MessageStatusProps = {
    delivered: boolean;
    read: boolean;
};

/**
 * A component to display the status of a message (delivered or read).
 * 
 * @param delivered - A boolean indicating if the message has been delivered.
 * @param read - A boolean indicating if the message has been read.
 * 
 * @remarks
 * - Displays a double checkmark icon when the message is delivered.
 * - The icon's color changes to blue (`#3497F9`) if the message is read.
 * - Uses accessible attributes (`aria-label`, `role`, `aria-live`) to support screen readers.
 */

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
