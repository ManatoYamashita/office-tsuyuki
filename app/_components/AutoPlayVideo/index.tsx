'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  useEffect(() => {
    // 動画の遅延読み込み
    if (hasWindow && videoRef.current) {
      videoRef.current.load();
    }
  }, [hasWindow]);

  if (!hasWindow) {
    return (
      <div className="w-full h-auto relative">
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          quality={75}
        />
      </div>
    );
  }

  return (
    <video
      preload="none"
      ref={videoRef}
      autoPlay
      muted
      loop={loop}
      playsInline
      className="w-full h-full object-cover"
      width={width}
      height={height}
      poster={imgSrc}
    >
      <source src={videoSrcWebM} type="video/webm" />
      <source src={videoSrcMp4} type="video/mp4" />
      <Image src={imgSrc} alt={alt} width={width} height={height} quality={70} />
    </video>
  );
}
