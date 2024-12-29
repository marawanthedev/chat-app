import React from 'react';

interface LoaderProps {
  width?: string;
  height?: string;
}

/**
 * A customizable loading spinner component.
 * 
 * @param width - The width of the loader container (optional).
 * @param height - The height of the loader container (optional).
 * 
 * @remarks
 * - Combines a spinning circle and a pulsing background animation to indicate loading state.
 * - Default styles are responsive and visually centered.
 */

export const Loader = ({ width, height }: LoaderProps) => {
  return (
    <div
      className="relative w-full h-full"
      role="status"
      style={{ width, height }}
    >
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
