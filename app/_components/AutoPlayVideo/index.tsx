'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type AutoPlayVideoProps = {
  videoSrcWebM?: string;
  videoSrcMp4: string;
  imgSrc: string;
  alt: string;
  width?: number;
  height?: number;
  loop?: boolean;
};

export default function AutoPlayVideo({
  videoSrcWebM,
  videoSrcMp4,
  imgSrc = '/images/placeholder.webp',
  alt = 'pomJP - OfficeTSUYUKI',
  width = 1920,  // デフォルト値
  height = 1080, // デフォルト値
  loop = false,   // デフォルト値
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldShowImage, setShouldShowImage] = useState(false);

  useEffect(() => {
    // Safari/iOSの検出
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isSafari || isIOS) {
      setShouldShowImage(true);
      return;
    }

    // 自動再生のチェック
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute('playsinline', 'true');
    video.setAttribute('muted', 'true');
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        setShouldShowImage(true);
      });
    }

    // クリーンアップ
    return () => {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, []);

  if (shouldShowImage) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      autoPlay
      loop={loop}
      className="w-full h-full object-cover"
      style={{
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      }}
    >
      {videoSrcWebM && <source src={videoSrcWebM} type="video/webm" />}
      <source src={videoSrcMp4} type="video/mp4" />
    </video>
  );
}
