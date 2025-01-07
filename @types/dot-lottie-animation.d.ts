declare module '@/app/_components/DotLottieAnimation' {
    interface DotLottieAnimationProps {
      src: string;
      loop?: boolean;
      autoplay?: boolean;
      className?: string;
    }
  
    const DotLottieAnimation: React.ComponentType<DotLottieAnimationProps>;
    export default DotLottieAnimation;
  }