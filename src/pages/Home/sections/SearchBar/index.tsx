import React from 'react';
import { SearchIcon } from '../../../../components/Icons';

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (content: string) => void;
}) => {
  return (
    <div className="px-4 py-2" aria-label="your search bar">
      <div className="text-[32px] font-bold mb-2">Chats</div>
      <div className="relative w-full flex items-center">
        <SearchIcon strokeWidth={1} aria-hidden="true" />
        <input
          type="text"
          placeholder="Search"
          aria-live="polite"
          tabIndex={0}
          aria-label="Search Chats"
          aria-describedby="search-input-description"
          className="w-full py-2 pl-2 bg-gray-200 rounded-lg placeholder-black placeholder:text-base placeholder:font-semibold"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        <p id="search-input-description" className="sr-only">
          Type here to search for chats. Press enter to start searching.
        </p>
      </div>
    </div>
  );
};
