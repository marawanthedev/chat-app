import React from 'react';
import { IconProps } from '../../types';

export const CoolEmojiIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_8421)">
        <path d="M4 16.12H20V0.12H4V16.12Z" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_d_0_8421"
          x="0"
          y="0.120117"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_8421"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_8421"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
