import React, { useState } from 'react';
import { DotsIcon, CameraIcon, PlusIcon } from '../../../../components/Icons';
import { IconProps } from '../../../../types';

type ButtonProps = {
  Icon: React.FC<IconProps>;
  ariaLabel: string;
  ariaDescription: string;
  bgColor: string;
  color?: string;
};

const NavigationButton: React.FC<ButtonProps> = ({
  Icon,
  ariaLabel,
  ariaDescription,
  bgColor,
  color,
}) => {
  const [liveRegionContent, setLiveRegionContent] = useState('');

  const descriptionId = `${ariaLabel.replace(/\s+/g, '-').toLowerCase()}-description`;

  // Handle hover and focus events to announce description
  const handleFocusOrHover = () => {
    setLiveRegionContent(ariaDescription); // Set content to announce on hover or focus
  };

  // Handle mouse leave or blur events to clear live region content
  const handleBlurOrLeave = () => {
    setLiveRegionContent('');
  };

  return (
    <button
      className={`rounded-full p-2 ${bgColor}`}
      aria-label={ariaLabel}
      role="button"
      tabIndex={0}
      onFocus={handleFocusOrHover}
      onMouseEnter={handleFocusOrHover}
      onBlur={handleBlurOrLeave}
      onMouseLeave={handleBlurOrLeave}
    >
      <Icon color={color} />
      <span id={descriptionId} className="sr-only">
        {ariaDescription}
      </span>

      <div
        aria-live="polite"
        role="region"
        className="sr-only"
        aria-atomic="true"
      >
        {liveRegionContent}
      </div>
    </button>
  );
};

export const Navigation = () => {
  const leftGroupButtons: ButtonProps[] = [
    {
      Icon: DotsIcon,
      ariaLabel: 'More options',
      ariaDescription: 'Opens a menu with additional settings and options',
      bgColor: 'bg-gray-200',
    },
  ];

  const rightGroupButtons: ButtonProps[] = [
    {
      Icon: CameraIcon,
      ariaLabel: 'Open camera',
      ariaDescription: 'Opens the camera interface to take a photo or video',
      bgColor: 'bg-gray-200',
    },
    {
      Icon: PlusIcon,
      ariaLabel: 'Add new item',
      ariaDescription: 'Opens a dialog to add a new item to the list',
      bgColor: 'bg-[#007AFF]',
      color: 'white',
    },
  ];

  return (
    <header className="flex justify-between items-center px-4 py-1 bg-white">
      <div className="flex space-x-2">
        {leftGroupButtons.map((button, index) => (
          <NavigationButton key={index} {...button} />
        ))}
      </div>

      <div className="flex space-x-2">
        {rightGroupButtons.map((button, index) => (
          <NavigationButton key={index} {...button} />
        ))}
      </div>
    </header>
  );
};
