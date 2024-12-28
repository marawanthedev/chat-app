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
      className={`flex items-center justify-between p-3 bg-white shadow-md rounded-t-lg h-[70px] `}
    >
      <div className="cursor-pointer" onClick={() => navigate(-1)}>
        <BackIcon color="#007AFF" />
      </div>
      <div className="flex items-center space-x-3">
        <div
          className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
          style={{ backgroundImage: `url(assets/UserAvatar/user-5.png)` }}
        />
        <div>
          <p className="font-medium">{contact.name}</p>
          <p className="text-xs text-gray-500">tap here for contact info</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-blue-500">
          <VideoIcon />
        </button>
        <button className="text-blue-500">
          <PhoneIcon />
        </button>
      </div>
    </div>
  );
};
