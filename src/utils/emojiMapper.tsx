import React from 'react';

const emojiPngMap: Record<string, string> = {
  'cool-face': '../../public/assets/Emojis/cool-face.png',
};

// Enum for emoji keys
export enum Emoji {
  CoolFace = 'cool-face',
}

interface EmojiProps {
  emoji: Emoji;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Emoji component to render PNG emojis.
 * @param props EmojiProps containing emoji key, alt text, width, and height.
 * @returns JSX.Element
 */
export const EmojiRenderer: React.FC<EmojiProps> = ({
  emoji,
  alt = 'emoji',
  width = 24,
  height = 24,
  className,
}) => {
  const pngPath = emojiPngMap[emoji];
  if (!pngPath) {
    throw new Error(`Emoji ${emoji} not found`);
  }

  return (
    <img
      className={className}
      src={pngPath}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
