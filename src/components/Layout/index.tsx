import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * A responsive layout component for rendering children with adaptive designs 
 * based on screen size. 
 * 
 * @param children - The child elements to render within the layout.
 * 
 * @remarks
 * - Provides a distinct layout for smaller devices (e.g., iPhone SE) and larger screens.
 * - Uses responsive utility classes from Tailwind CSS to adjust visibility and styling.
 */

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Layout for iPhone SE 1st/2nd/3rd generation and other phones  */}
      <div
        className="w-full w-full h-full
          min-[320px]:block max-[320px]:block 
          sm:hidden lg:hidden xl:hidden"
      >
        <div className="p-4 rounded-lg shadow-lg overflow-x-hidden h-full">
          {children}
        </div>
      </div>

      {/* Layout for other devices */}
      <div className="hidden sm:block lg:block xl:block w-full max-w-[800px]  h-full p-4 rounded-lg shadow-lg overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
