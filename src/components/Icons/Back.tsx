import React from 'react';
import { IconProps } from '../../types';

export const BackIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  strokeWidth = 1,
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.60206 10.5L11.4062 2.55085C11.9866 1.9597 11.9778 1.00999 11.3867 0.429623C10.7955 -0.150747 9.84583 -0.142006 9.26546 0.449147L0.429623 9.44915C-0.143208 10.0326 -0.143208 10.9674 0.429623 11.5509L9.26546 20.5509C9.84583 21.142 10.7955 21.1507 11.3867 20.5704C11.9778 19.99 11.9866 19.0403 11.4062 18.4491L3.60206 10.5Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
