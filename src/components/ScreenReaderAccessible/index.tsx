import React from 'react';

export const ScreenReaderAccessible = ({
  liveRegionContent,
}: {
  liveRegionContent: string;
}) => {
  return (
    <div
      aria-live="polite"
      role="region"
      className="sr-only"
      aria-atomic="true"
    >
      {liveRegionContent}
    </div>
  );
};
