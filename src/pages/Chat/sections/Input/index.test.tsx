import React from 'react';
import { render } from '@testing-library/react';
import { InputSection } from './index'; // Update the path accordingly
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('InputSection Component', () => {
  it('should render the PlusIcon with the correct aria-label', () => {
    const { getByLabelText } = render(<InputSection />);
    const plusIcon = getByLabelText('Add Attachment');
    expect(plusIcon).toBeInTheDocument();
  });

  it('should render the StickersIcon inside the input container', () => {
    const { getByLabelText } = render(<InputSection />);
    const stickersIcon = getByLabelText('Use Sticker');
    expect(stickersIcon).toBeInTheDocument();
  });

  it('should render the input field with the correct placeholder and aria-label', () => {
    const { getByLabelText } = render(<InputSection />);
    const inputField = getByLabelText('Type message');
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveAttribute('placeholder', 'Type message');
  });

  it('should render the OutlinedCameraIcon with the correct aria-label', () => {
    const { getByLabelText } = render(<InputSection />);
    const cameraIcon = getByLabelText('Capture Image');
    expect(cameraIcon).toBeInTheDocument();
  });

  it('should render the AudioIcon with the correct aria-label', () => {
    const { getByLabelText } = render(<InputSection />);
    const audioIcon = getByLabelText('Record Audio');
    expect(audioIcon).toBeInTheDocument();
  });
});
