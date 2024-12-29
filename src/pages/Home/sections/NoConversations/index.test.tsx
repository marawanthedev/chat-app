import { render } from '@testing-library/react';
import { NoConversationsSection } from './index'; // Adjust the path if needed
import '@testing-library/jest-dom'; // For additional DOM matchers
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('NoConversationsSection', () => {
  it('should display the "No Conversations found" message', () => {
    const { getByText } = render(<NoConversationsSection />);
    const messageElement = getByText('No Conversations found');
    expect(messageElement).toBeInTheDocument();
  });
});
