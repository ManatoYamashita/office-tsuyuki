// app/components/WorksList/animations.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initializeAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);
};

export const createItemAnimation = (element: HTMLElement) => {
  return gsap.fromTo(element, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",

    scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
    }
  },
  {
    y: 0,
    opacity: 1
  },
  
);
};
