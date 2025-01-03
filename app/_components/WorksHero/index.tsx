'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'

export default function WorksHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(descriptionRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
    .from(buttonRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        お使いのブラウザは動画タグをサポートしていません。
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container relative z-10 mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <h1 
            ref={titleRef}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block">未来を創造する</span>
            <span className="block text-primary">革新的なソリューション</span>
          </h1>
          <p 
            ref={descriptionRef}
            className="mt-6 max-w-lg text-xl sm:max-w-3xl"
          >
            最先端のテクノロジーと創造的なアイデアを組み合わせ、ビジネスの成長を加速させます。私たちと一緒に、新しい可能性を探求しましょう。
          </p>
          <div className="mt-10">
            <Button
              ref={buttonRef}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              始めましょう
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
