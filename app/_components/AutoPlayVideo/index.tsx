'use client';

import { useState, useEffect } from 'react';

interface AutoPlayVideoProps {
  videoSrcWebM: string;
  videoSrcMp4: string;
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
  loop?: boolean;
}

export default function AutoPlayVideo({
  videoSrcWebM,
  videoSrcMp4,
  imgSrc,
  alt,
  width,
  height,
  loop = false,
}: AutoPlayVideoProps) {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  if (!hasWindow) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop={loop}
      playsInline
      className="w-full h-auto"
      width={width}
      height={height}
      poster={imgSrc}
    >
      <source src={videoSrcWebM} type="video/webm" />
      <source src={videoSrcMp4} type="video/mp4" />
      <img src={imgSrc} alt={alt} width={width} height={height} />
    </video>
  );
}
