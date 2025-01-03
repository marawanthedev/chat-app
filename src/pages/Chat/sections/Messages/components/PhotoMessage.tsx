import React from 'react';
import { ChatMessage } from '../../../../../types';
import { FileIcon } from '../../../../../components/Icons';
import chroma from 'chroma-js';
import { MessageStatus } from '../../../../../components';

type PhotoMessageProps = Omit<
  Extract<ChatMessage, { type: 'photo' }>,
  'type' | 'sentBy'
> & {
  color: string;
};

export const PhotoMessage = ({
  delivered,
  read,
  sentAt,
  color,
}: PhotoMessageProps) => {
  // to ensure we get similar effect for other images and to have a scalable solution
  const darkerColor = chroma(color).darken(0.35).hex();

  return (
    <div
      className={`flex flex-col gap-y-2 p-2 border-box justify-between rounded`}
      role="region"
      aria-labelledby="photo-message"
      style={{ backgroundColor: `${color}` }}
    >
      <div
        className={`flex items-center px-2 rounded w-[95%] h-[45px] gap-x-2`}
        role="button"
        aria-label="File: IMG_0475"
        style={{ backgroundColor: `${darkerColor}` }}
      >
        <FileIcon />
        <span id="photo-message">IMG_0475</span>
      </div>
      <div className="flex items-center gap-x-3 text-[rgba(0,0,0,.5)] text-[11px]">
        <div className="flex items-center gap-x-2 ">
          <span>2.4MB</span>
          <span className="flex items-center gap-x-1">
            <span className="inline-block w-1 h-1 bg-[#b0c69e] rounded" /> png
          </span>
        </div>
        <div className="flex items-center gap-x-2 ">
          <span>{sentAt}</span>
          <MessageStatus delivered={delivered} read={read} />
        </div>
      </div>
    </div>
  );
};
