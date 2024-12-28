import React from 'react';
import { zIndex } from '../../../../utils';
import {
  CameraIcon,
  ChatIcon,
  PhoneIcon,
  SettingsIcon,
  StatusIcon,
} from '../../../../components/Icons';
import { IconProps } from '../../../../types';

const FloatingFooterActionButton = ({
  Icon,
  text,
  ariaLabel,
  className,
}: {
  Icon: React.FC<IconProps>;
  text: string;
  ariaLabel?: string;
  className?: string;
}) => {
  return (
    <button
      className={`text-gray-500 flex flex-col justify-between items-center ${className}`}
      aria-label={ariaLabel}
    >
      <span className="w-6 h-6 flex justify-center items-center">
        <Icon />
      </span>
      <p>{text}</p>
    </button>
  );
};

export const FloatingFooter = () => {
  const buttons = [
    {
      icon: StatusIcon,
      text: 'Status',
      ariaLabel: 'Status Button',
    },
    {
      icon: PhoneIcon,
      text: 'Calls',
      ariaLabel: 'Phone Button',
    },
    {
      icon: CameraIcon,
      text: 'Camera',
      ariaLabel: 'Camera Button',
    },
    {
      icon: ChatIcon,
      text: 'Chat',
      ariaLabel: 'Chat Button',
    },
    {
      icon: SettingsIcon,
      text: 'Settings',
      ariaLabel: 'Settings Button',
    },
  ];

  return (
    <footer
      className={`flex justify-between items-center py-1 bg-white shadow w-screen fixed bottom-0 left-0 border-t border-gray-300 ${zIndex.floatingActionButton} px-4 overflow-x-hidden`}
    >
      {buttons.map((button, index) => (
        <FloatingFooterActionButton
          key={index}
          Icon={button.icon}
          text={button.text}
          ariaLabel={button.ariaLabel}
        />
      ))}
    </footer>
  );
};
