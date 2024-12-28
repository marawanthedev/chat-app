import React from 'react';
import { ReadIcon } from '../../../../components/Icons';

export const ChatList = () => {
  return (
    <div className="px-4 flex-1 overflow-y-scroll">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex items-start justify-between py-3">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-600 flex items-center gap-x-1">
                <ReadIcon /> Yes, 2PM is awesome
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-500">12/19/19</div>
        </div>
      ))}
    </div>
  );
};
