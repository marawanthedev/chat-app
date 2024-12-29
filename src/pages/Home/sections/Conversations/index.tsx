import React from 'react';
import { Conversation } from '../../../../types';
import { TextMessage, AudioMessage, PhotoMessage } from './components';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export const Conversations = ({
  conversations,
}: {
  conversations?: Conversation[];
}) => {
  return (
    <div className="px-4 pb-14 flex-1 overflow-y-scroll" role="list">
      {conversations?.map((conversation, index) => {
        const avatarIndex = (index % 5) + 1;
        const avatarSrc = `src/assets/UserAvatar/user-${avatarIndex}.png`;
        const { delivered, lastMessageAt, name, read, type, audio, text } =
          conversation;
        const formattedLastMessageAt = format(
          new Date(lastMessageAt),
          'MM/dd/yy',
        );

        return (
          <Link
            to="/conversation"
            key={index}
            className="flex items-start justify-between py-1.5 cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${avatarSrc})` }}
              />
              <div>
                <p className="font-medium">{name}</p>
                {type === 'text' && (
                  <TextMessage text={text} read={read} delivered={delivered} />
                )}
                {type === 'audio' && <AudioMessage audio={audio} read={read} />}
                {type === 'photo' && <PhotoMessage />}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {formattedLastMessageAt}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
