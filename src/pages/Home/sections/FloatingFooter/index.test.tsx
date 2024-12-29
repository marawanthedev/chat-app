import React from 'react';
import { render } from '@testing-library/react';
import { FloatingFooter } from './index';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('FloatingFooter', () => {
  it('should render the floating footer with all buttons', () => {
    const { getByText } = render(<FloatingFooter />);

    const statusButton = getByText(/status/i);
    const callsButton = getByText(/calls/i);
    const cameraButton = getByText(/camera/i);
    const chatButton = getByText(/chat/i);
    const settingsButton = getByText(/settings/i);

    expect(statusButton).toBeInTheDocument();
    expect(callsButton).toBeInTheDocument();
    expect(cameraButton).toBeInTheDocument();
    expect(chatButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });

  it('should render buttons with correct text', () => {
    const { getByText } = render(<FloatingFooter />);

    const statusButtonText = getByText('Status');
    const callsButtonText = getByText('Calls');
    const cameraButtonText = getByText('Camera');
    const chatButtonText = getByText('Chat');
    const settingsButtonText = getByText('Settings');

    expect(statusButtonText).toBeInTheDocument();
    expect(callsButtonText).toBeInTheDocument();
    expect(cameraButtonText).toBeInTheDocument();
    expect(chatButtonText).toBeInTheDocument();
    expect(settingsButtonText).toBeInTheDocument();
  });

  it('should render a total of 5 buttons in the footer', () => {
    const { getAllByText } = render(<FloatingFooter />);
    const buttons = getAllByText(/status|calls|camera|chat|settings/i);
    expect(buttons).toHaveLength(5);
  });
});
