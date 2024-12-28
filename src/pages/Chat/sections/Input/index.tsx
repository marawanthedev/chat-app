import React from 'react';
import {
  PlusIcon,
  StickersIcon,
  AudioIcon,
  OutlinedCameraIcon,
} from '../../../../components/Icons';

export const InputSection = () => {
  return (
    <div className="flex items-center justify-between space-x-3 p-3 bg-white shadow-md rounded-b-lg text-[#007AFF] w-full">
      <span aria-label="Add Attachment">
        {' '}
        <PlusIcon className="w-5 h-5" />
      </span>
      <div className="relative flex-1 flex items-center ">
        <span
          aria-label="Use Sticker"
          className="absolute top-[50%] right-[10px] transform translate-y-[-50%]"
        >
          <StickersIcon />
        </span>
        <input
          type="text"
          placeholder="Type message"
          aria-label="Type message"
          className="flex-1 border border-gray-300 rounded-full p-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex gap-x-2">
        <span aria-label="Capture Image">
          {' '}
          <OutlinedCameraIcon />
        </span>
        <span aria-label="Record Audio">
          <AudioIcon />
        </span>
      </div>
    </div>
  );
};
