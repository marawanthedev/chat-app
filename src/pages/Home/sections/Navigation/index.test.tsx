import React from 'react';
import { render } from '@testing-library/react';
import { Navigation } from './index';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('Navigation', () => {
  it('should render the left group with the correct button', () => {
    const { getByRole } = render(<Navigation />);

    const dotsButton = getByRole('button', { name: /more options/i });
    expect(dotsButton).toBeInTheDocument();
  });

  it('should render the right group with the correct buttons', () => {
    const { getByRole } = render(<Navigation />);

    const cameraButton = getByRole('button', { name: /open camera/i });
    const plusButton = getByRole('button', { name: /add new item/i });

    expect(cameraButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
  });

  it('should render the left and right groups separately', () => {
    const { getAllByRole, getByRole } = render(<Navigation />);

    const leftGroupButtons = getAllByRole('button', { name: /more options/i });
    const rightGroupButtons = [
      getByRole('button', { name: /open camera/i }),
      getByRole('button', { name: /add new item/i }),
    ];

    expect(leftGroupButtons).toHaveLength(1);
    expect(rightGroupButtons).toHaveLength(2);
  });
});
