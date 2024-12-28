import React from 'react';
import { CameraIcon } from '../../../../../components/Icons';

export const PhotoMessage = () => {
  return (
    <div className="flex items-center gap-x-1">
      <span aria-hidden={true}>
        <CameraIcon strokeWidth={1} />
      </span>
      <span aria-label="Photo">Photo</span>
    </div>
  );
};
