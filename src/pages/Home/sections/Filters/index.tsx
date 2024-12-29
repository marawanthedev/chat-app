import React from 'react';
import { PlusIcon } from '../../../../components/Icons';

type FilterButton = {
  ariaLabel: string;
  bgColor: string;
  color?: string;
} & ({ label: string; Icon?: never } | { Icon: React.FC; label?: never });

export const Filters = () => {
  const filterButtons: FilterButton[] = [
    {
      label: 'All',
      ariaLabel: 'view all',
      bgColor: '#DDEBFC',
      color: '#153C60',
    },
    {
      label: 'Unread',
      ariaLabel: 'filter by unread messages',
      bgColor: 'gray-200',
    },
    {
      label: 'Favourites',
      ariaLabel: 'filter by your favourites',
      bgColor: 'gray-200',
    },
    { Icon: PlusIcon, ariaLabel: 'add filter', bgColor: 'transparent' },
  ];

  return (
    <div
      className="flex justify-between px-4 py-2 text-sm font-semibold text-gray-600"
      role="list"
    >
      {filterButtons.map((button, index) => (
        <button
          key={index}
          aria-label={button.ariaLabel}
          className={`px-3 py-1 rounded-full bg-[${button.bgColor}] ${button.color ? `text-[${button.color}]` : 'inherit'}`}
        >
          {button.Icon ? <button.Icon /> : button.label}
        </button>
      ))}
    </div>
  );
};
