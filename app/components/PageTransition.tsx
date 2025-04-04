'use client'

import { useEffect, useRef, useState } from 'react'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
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
  }, [pathname, mounted])

  return (
    <>
      {/* トランジションオーバーレイ */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black pointer-events-none z-50"
        style={{ transform: 'scaleY(0)', transformOrigin: 'bottom' }}
      />
      
      {/* ページコンテンツ */}
      <div 
        ref={containerRef}
        style={{ opacity: mounted ? 1 : 0 }}
      >
        {children}
      </div>
    </>
  )
}
