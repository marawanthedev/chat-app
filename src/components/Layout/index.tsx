import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

// breakpoints
// base is iphone SE and reason we use 320px as that was the iphone SE 1st and 2nd gen, only 3rd gen screen is 375px
// sm:: Targets small devices, like iPhone 6 / 7 / 8(375px wide) or small tablets.
// md:: Targets medium devices, such as iPad (768px wide).
// lg:: Targets larger devices, like larger tablets or small laptops(1024px wide).
// xl:: Targets very large screens, like desktops(1280px wide and above).

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Layout for iPhone SE 1st/2nd generation */}
      <div
        className="w-full max-w-[320px] h-[568px] 
          min-[320px]:block max-[320px]:block 
          min-[321px]:hidden sm:hidden lg:hidden xl:hidden"
      >
        <div className="p-4 rounded-lg shadow-lg overflow-x-hidden h-full">
          {children}
        </div>
      </div>

      {/* Layout for iPhone SE 3rd generation */}
      <div
        className="w-full max-w-[375px] h-[667px] 
          max-[375px]:block min-[376px]:hidden sm:hidden lg:hidden xl:hidden"
      >
        <div className="p-4 rounded-lg shadow-lg overflow-x-hidden h-full">
          {children}
        </div>
      </div>

      {/* Layout for other devices */}
      <div className="hidden sm:block lg:block xl:block w-full max-w-[414px] sm:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] h-full p-4 rounded-lg shadow-lg overflow-x-hidden">
        {/* This layout will be applied to other larger devices */}
        {children}
      </div>
    </div>
  );
};
