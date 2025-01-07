'use client'

import '@dotlottie/player-component';

interface DotLottieAnimationProps {
  src: string
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function DotLottieAnimation({
  src,
  loop = true,
  autoplay = true,
  className,
}: DotLottieAnimationProps){
return (
    <dotlottie-player
        src={src}
        autoplay={autoplay}
        loop={loop}
        className={className}
    />
    )
}
