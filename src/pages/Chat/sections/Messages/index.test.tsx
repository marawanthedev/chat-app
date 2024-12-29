import React from 'react';
import { render, screen } from '@testing-library/react';
import { MessagesSection } from './index'; // Update the import path
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { ChatMessage } from '../../../../types';

describe('MessagesSection Component', () => {
  it('should display the loader when messages are not provided', () => {
    render(<MessagesSection />);
    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
  });

  it('should display "No Messages yet." when messages array is empty', () => {
    render(<MessagesSection messages={[]} />);

    const noMessagesText = screen.getByLabelText('no messages');
    expect(noMessagesText).toBeInTheDocument();
    expect(noMessagesText).toHaveTextContent('No Messages yet.');
  });

  it('should display text messages correctly when messages array contains text message', () => {
    const messages: ChatMessage[] = [
      {
        sentAt: '2023-12-29T14:30:00Z',
        sentBy: 'self',
        type: 'text',
        text: 'Hello',
        delivered: true,
        read: false,
      },
    ];

    render(<MessagesSection messages={messages} />);

    const messageText = screen.getByText('Hello');
    expect(messageText).toBeInTheDocument();
  });

  // no photo image testing bcs we don't have actual images but it would look something like this

  // it('should render photo message correctly if message type is "photo"', () => {
  //     const messages: ChatMessage[] = [
  //         {
  //             sentAt: '2023-12-29T14:30:00Z',
  //             sentBy: 'other',
  //             type: 'photo',
  //             photo: 'some-image-url',
  //             delivered: true,
  //             read: false,
  //         },
  //     ];

  //     render(<MessagesSection messages={messages} />);

  //     const image = screen.getByRole('img');
  //     expect(image).toHaveAttribute('src', 'some-image-url');
  // });
});
