import React from 'react';
import { IconProps } from '../../types';

export const PlusIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Apply custom classes
    >
      <path
        d="M7.99999 3.33325V12.6666M3.33333 7.99992H12.6667"
        stroke={color} // Dynamic stroke color
        strokeWidth={strokeWidth} // Dynamic stroke width
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
