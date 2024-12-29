import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './index';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

describe('SearchBar', () => {
  it('should render the search input with correct placeholder', () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const inputElement = getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onSearch when typing in the input field', () => {
    const onSearchMock = vi.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={onSearchMock} />,
    );
    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test search' } });
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('test search');
  });
});
