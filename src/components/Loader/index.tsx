import React from 'react';

interface LoaderProps {
  width: string;
  height: string;
}

export const Loader = ({ width, height }: LoaderProps) => {
  return (
    <div className="relative" style={{ width, height }}>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
      </div>
      <div
        className="w-full h-full animate-pulse"
        style={{ position: 'absolute' }}
      />
    </div>
  );
};
