import React from 'react';
import { IconProps } from '../../types';

export const ReadIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2143 0.525763L16.8366 1.14806L10.1025 10.6137L7.37274 7.85022L8.52874 6.22422L10.1025 7.16505L16.2143 0.525763ZM10.7495 0.386475L11.3718 1.00877L4.63772 10.4744L0 5.79869L1.03555 4.76313L4.63772 7.02576L10.7495 0.386475Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
