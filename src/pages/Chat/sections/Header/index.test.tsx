import React from 'react';
import { render } from '@testing-library/react';
import { HeaderSection } from './index'; // Update the path accordingly
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('HeaderSection Component', () => {
  it('should display loader when contact is not provided', () => {
    const { getByRole } = render(<HeaderSection />);
    const loader = getByRole('status');
    expect(loader).toBeInTheDocument();
  });

  it('should display contact information when contact is provided', () => {
    const contact = { name: 'John Doe', id: '1' };
    const { getByText } = render(<HeaderSection contact={contact} />);

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('tap here for contact info')).toBeInTheDocument();
  });

  it('should throw error if contact name is empty', () => {
    const contact = { name: '', id: '1' };
    expect(() => render(<HeaderSection contact={contact} />)).toThrow(
      'Failed to load user data',
    );
  });

  it('should navigate back when back icon is clicked', () => {
    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);
    const contact = { name: 'marwan', id: '1' };

    const { getAllByRole } = render(<HeaderSection contact={contact} />);

    const backButton = getAllByRole('button')[0];
    backButton.click();

    expect(navigate).toHaveBeenCalledWith(-1);
  });

  it('should render video and phone buttons', () => {
    const { getByLabelText } = render(
      <HeaderSection contact={{ name: 'John Doe' }} />,
    );

    const videoButton = getByLabelText('Video Call');
    const phoneButton = getByLabelText('Phone Call');

    expect(videoButton).toBeInTheDocument();
    expect(phoneButton).toBeInTheDocument();
  });
});
