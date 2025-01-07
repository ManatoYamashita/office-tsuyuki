'use client'

import dynamic from 'next/dynamic'
import '@dotlottie/player-component';
import { FC } from 'react';

interface DotLottieAnimationProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const DotLottieAnimation: FC<DotLottieAnimationProps> = ({
  src,
  loop = true,
  autoplay = true,
  className,
}) => {
  if (typeof window === 'undefined') {
    return <div className={className} />; // サーバーサイドでのプレースホルダー
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
export default dynamic(() => Promise.resolve(DotLottieAnimation), {
  ssr: false
});
