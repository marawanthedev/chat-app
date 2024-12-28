import React from 'react';
import { SearchIcon } from '../../../../components/Icons';

export const Search = () => {
  return (
    <div className="px-4 py-2">
      <div className="text-[32px] font-bold mb-2">Chats</div>
      <div className="relative w-full flex items-center">
        <SearchIcon strokeWidth={1} aria-hidden="true" />
        <input
          type="text"
          placeholder="Search"
          aria-label="Search chats"
          className="w-full py-2 pl-2 bg-gray-200 rounded-lg placeholder-black placeholder:text-base placeholder:font-semibold"
        />
      </div>
    </div>
  );
};
