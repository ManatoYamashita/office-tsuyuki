'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // オーバーレイのアニメーション
    tl.fromTo(
      overlayRef.current,
      {
        scaleY: 0,
        transformOrigin: 'bottom',
      },
      {
        scaleY: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }
    )
    .to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.5,
      ease: 'power4.inOut',
      delay: 0.1,
    })

    // コンテンツのアニメーション
    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.3' // オーバーレイのアニメーションと少し重ねる
    )

    return () => {
      tl.kill();
    };
  }, [pathname])

  return (
    <>
      {/* トランジションオーバーレイ */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black pointer-events-none z-50"
      />
      
      {/* ページコンテンツ */}
      <div ref={containerRef}>
        {children}
      </div>
    </>
  )
}
