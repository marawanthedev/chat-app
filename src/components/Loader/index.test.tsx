import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './index'; // Update the path accordingly
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('Loader', () => {
  it('should render the loader spinner', () => {
    const { container } = render(<Loader />);

    const spinnerElement = container.querySelector('.animate-spin');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should apply custom width and height if provided', () => {
    const customWidth = '100px';
    const customHeight = '100px';

    const { container } = render(
      <Loader width={customWidth} height={customHeight} />,
    );

    const loaderElement = container.querySelector('.relative');
    expect(loaderElement).toHaveStyle(`width: ${customWidth}`);
    expect(loaderElement).toHaveStyle(`height: ${customHeight}`);
  });

  it('should render with default size if no width or height is provided', () => {
    const { container } = render(<Loader />);

    const loaderElement = container.querySelector('.relative');
    expect(loaderElement).toHaveClass('w-full');
    expect(loaderElement).toHaveClass('h-full');
  });
});
