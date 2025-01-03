import React from 'react';
import { IconProps } from '../../types';

export const VoiceRecordIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.01408 5.5501V7.29306C1.01408 9.21827 2.57478 10.779 4.5 10.779C6.28999 10.779 7.77539 9.42593 7.96489 7.68629L7.98019 7.49847L7.98592 7.29306V5.5501H9L8.99982 7.30672L8.99335 7.53952C8.87374 9.75144 7.16278 11.5258 5.00052 11.7655L5 13.6501H7.3V14.6501H1.7V13.6501H4L4.0003 11.7656C1.81916 11.5247 0.107772 9.72483 0.00489799 7.50489L0 7.29306V5.5501H1.01408ZM4.5 0.350098C5.88071 0.350098 7 1.46939 7 2.8501V7.3501C7 8.73081 5.88071 9.8501 4.5 9.8501C3.11929 9.8501 2 8.73081 2 7.3501V2.8501C2 1.46939 3.11929 0.350098 4.5 0.350098Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
