import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

// breakpoints
// sm:: Targets small devices, like iPhone 6 / 7 / 8(375px wide) or small tablets.
// md:: Targets medium devices, such as iPad (768px wide).
// lg:: Targets larger devices, like larger tablets or small laptops(1024px wide).
// xl:: Targets very large screens, like desktops(1280px wide and above).

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Inner container with responsive width and height */}
      <div className="w-full max-w-[320px] sm:max-w-[375px] md:max-w-[414px] lg:max-w-[768px] xl:max-w-[1024px] h-full sm:h-[568px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-white p-4 rounded-lg shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};
