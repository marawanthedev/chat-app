import React from 'react';
import { DotsIcon, CameraIcon, PlusIcon } from '../../../../components/Icons';
import { IconProps } from '../../../../types';

type ButtonProps = {
  Icon: React.FC<IconProps>;
  ariaLabel: string;
  bgColor: string;
  color?: string;
};

export const Navigation = () => {
  const leftGroupButtons: ButtonProps[] = [
    {
      Icon: DotsIcon,
      ariaLabel: 'More options',
      bgColor: 'bg-gray-200',
    },
  ];

  const rightGroupButtons: ButtonProps[] = [
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
    <header className="flex justify-between items-center px-4 py-1 bg-white">
      <div className="flex space-x-2" role="list">
        {leftGroupButtons.map((button, index) => (
          <button
            key={index}
            className={`rounded-full p-2 ${button.bgColor}`}
            aria-label={button.ariaLabel}
          >
            <button.Icon color={button.color} />
          </button>
        ))}
      </div>

      <div className="flex space-x-2" role="list">
        {rightGroupButtons.map((button, index) => (
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
