"use client";   

import Image from 'next/image'
import NuemorficButton from '../NeumorficButton'

export default function BusinessContent() {
  return (
    <section className="space-y-6 container mx-auto px-4 py-12 md:py-24">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
        建築DXソリューション
    </h1>
    <h2 className="text-2xl md:text-3xl text-muted-foreground">
        興味あることはなんでも徹底的に
    </h2>
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
        <p className="text-lg text-muted-foreground">
            建築とコンピュータ利用を中心に幅広く「興味あることはなんでも徹底的にやってみよう」精神で活動しております。従いまして、その業務内容はバラエティに富んでいます。
        </p>
        <div className="flex flex-wrap gap-4">
            <NuemorficButton label="建築設計デザイン" url="/" />
            <NuemorficButton label="建築研究開発コンサル" url="/" />
            <NuemorficButton label="建築DX" url="/" />
        </div>
        </div>
        <div className="flex-1 w-full relative">
        <div className="aspect-w-1 aspect-h-1 lg:w-full lg:max-w-full w-3/4  max-w-3/4 mx-auto">
            <video
                src="/images/solutions_triangle.webm"
                title="革新的なソリューションのイメージ"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
        </div>
    </div>
    </section>

  )
}
