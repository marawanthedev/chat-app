import React from 'react';
import { Conversation } from '../../../../../types';
import { VoiceRecordIcon } from '../../../../../components/Icons/VoiceRecord';

type AudioMessageProps = Omit<
  Extract<Conversation, { type: 'audio' }>,
  'name' | 'lastMessageAt' | 'type' | 'delivered'
>;

export const AudioMessage = ({ audio, read }: AudioMessageProps) => {
  return (
    <div role="listitem" className="flex items-center gap-x-1">
      <span aria-hidden={true}>
        <VoiceRecordIcon
          strokeWidth={1}
          color={read ? '#60BB58' : 'currentColor'}
        />
      </span>
      <span aria-label="audio duration">{audio.length}</span>
    </div>
  );
};
