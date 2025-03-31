'use client'

import dynamic from 'next/dynamic'
import '@dotlottie/player-component';
import { FC, useEffect, useState } from 'react';

interface DotLottieAnimationProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const DotLottiePlayer: FC<DotLottieAnimationProps> = ({
  src,
  loop = true,
  autoplay = true,
  className,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`${className} bg-grey`} />;
  }

  return (
    <dotlottie-player
      src={src}
      autoplay={autoplay}
      loop={loop}
      className={className}
    />
  );
};

// SSRを無効化してクライアントサイドのみでレンダリング
const DotLottieAnimation = dynamic(() => Promise.resolve(DotLottiePlayer), {
  ssr: false
});

export default DotLottieAnimation;
