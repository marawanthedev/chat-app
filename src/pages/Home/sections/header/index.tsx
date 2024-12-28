import React from 'react';
import { DotsIcon, CameraIcon, PlusIcon } from '../../../../components/Icons';
import { IconProps } from '../../../../types';

type ButtonProps = {
  Icon: React.FC<IconProps>;
  ariaLabel: string;
  bgColor: string;
  color?: string;
};

export const Header = () => {
  const buttons: ButtonProps[] = [
    {
      Icon: DotsIcon,
      ariaLabel: 'More options',
      bgColor: 'bg-gray-200',
    },
    {
      Icon: CameraIcon,
      ariaLabel: 'Open camera',
      bgColor: 'bg-gray-200',
    },
    {
      Icon: PlusIcon,
      ariaLabel: 'Add new item',
      bgColor: 'bg-[#007AFF]',
      color: 'white',
    },
  ];

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white">
      <div className="flex space-x-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`rounded-full p-2 ${button.bgColor}`}
            aria-label={button.ariaLabel}
          >
            <button.Icon color={button.color} />
          </button>
        ))}
      </div>
    </header>
  );
};
