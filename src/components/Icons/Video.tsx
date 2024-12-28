import React from 'react';
import { IconProps } from '../../types';

export const VideoIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="25"
      height="17"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4.5C17 2.29086 15.2091 0.5 13 0.5H4C1.79086 0.5 0 2.29086 0 4.5V12C0 14.2091 1.79086 16 4 16H13C15.2091 16 17 14.2091 17 12V4.5ZM4 1.7H13C14.5464 1.7 15.8 2.9536 15.8 4.5V12C15.8 13.5464 14.5464 14.8 13 14.8H4C2.4536 14.8 1.2 13.5464 1.2 12V4.5C1.2 2.9536 2.4536 1.7 4 1.7ZM24.2926 2.42115C24.4271 2.59596 24.5 2.81032 24.5 3.03086V13.2104C24.5 13.7627 24.0523 14.2104 23.5 14.2104C23.3149 14.2104 23.1335 14.1591 22.9759 14.0621L18.9518 11.5857C18.3603 11.2217 18 10.5769 18 9.88241V6.9848C18 6.36386 18.2884 5.77815 18.7806 5.39956L22.8903 2.23824C23.328 1.9015 23.9559 1.9834 24.2926 2.42115ZM19.5122 6.3507L23.3 3.43704V12.8525L19.5807 10.5637C19.3441 10.4181 19.2 10.1602 19.2 9.88241V6.9848C19.2 6.73643 19.3154 6.50214 19.5122 6.3507Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};