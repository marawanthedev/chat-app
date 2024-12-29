import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

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
      <div className="hidden sm:block lg:block xl:block w-full max-w-[414px] sm:max-w-[768px] lg:max-w-[1024px] xl:w-[1000px] h-full p-4 rounded-lg shadow-lg overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
