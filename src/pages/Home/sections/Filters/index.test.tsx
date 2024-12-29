import React from 'react';
import { render } from '@testing-library/react';
import { Filters } from './index';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

describe('Filters', () => {
  it('should render the "All" filter button', () => {
    const { getByRole } = render(<Filters />);
    const allButton = getByRole('button', { name: /view all/i });
    expect(allButton).toBeInTheDocument();
  });

  it('should render the "Unread" filter button', () => {
    const { getByRole } = render(<Filters />);
    const unreadButton = getByRole('button', {
      name: /filter by unread messages/i,
    });
    expect(unreadButton).toBeInTheDocument();
  });

  it('should render the "Favourites" filter button', () => {
    const { getByRole } = render(<Filters />);
    const favouritesButton = getByRole('button', {
      name: /filter by your favourites/i,
    });
    expect(favouritesButton).toBeInTheDocument();
  });

  it('should render the correct number of filter buttons', () => {
    const { getAllByRole } = render(<Filters />);
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });
});
