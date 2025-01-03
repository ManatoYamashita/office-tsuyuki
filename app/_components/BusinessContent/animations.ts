// app/components/BusinessContent/animations.ts
import gsap from 'gsap';
import { AnimationRefs } from './types';

export const createAnimationTimeline = (
  sectionRef: HTMLElement | null,
  refs: AnimationRefs
) => {
  if (!sectionRef) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef,
      start: "top 80%",
    }
  });

  const commonConfig = {
    duration: 0.8,
    ease: "power3.out",
  };

  // Heading animation
  tl.fromTo(refs.heading,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ...commonConfig }
  );

  // Subheading animation
  tl.fromTo(refs.subHeading,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, ...commonConfig },
    "-=0.6"
  );

  // Text content animation
  tl.fromTo(refs.textContent,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, ...commonConfig },
    "-=0.4"
  );

  // Buttons animation
  tl.fromTo(refs.buttons,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, ...commonConfig },
    "-=0.4"
  );

  return tl;
};
