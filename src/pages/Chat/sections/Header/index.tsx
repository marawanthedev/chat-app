import React from 'react';
import { BackIcon, VideoIcon, PhoneIcon } from '../../../../components/Icons';
import { ChatContact } from '../../../../types';
import { Loader } from '../../../../components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const HeaderSection = ({ contact }: { contact?: ChatContact }) => {
  const navigate = useNavigate();

  if (!contact) {
    return (
      <div className="flex items-center justify-center p-3 bg-white shadow-md rounded-t-lg">
        <Loader width="2rem" height="2rem" />
      </div>
    );
  }

  if (contact.name === '') {
    throw new Error('Failed to load user data');
  }

  return (
    <div
      className={`flex items-center justify-between fixed top-0 w-full p-3 bg-white shadow-md rounded-t-lg h-[70px] `}
    >
      <button
        className="cursor-pointer"
        role="button"
        onClick={() => navigate(-1)}
      >
        <BackIcon color="#007AFF" />
      </button>
      <div className="flex items-center space-x-3">
        <div
          className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
          style={{ backgroundImage: `url(src/assets/UserAvatar/user-5.png)` }}
        />
        <div>
          <p className="font-medium">{contact.name}</p>
          <p className="text-xs text-gray-500">tap here for contact info</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-blue-500" aria-label="Video Call">
          <VideoIcon />
        </button>
        <button className="text-blue-500" aria-label="Phone Call">
          <PhoneIcon />
        </button>
      </div>
    </div>
  );
};
