'use client'
import React, { useState, useEffect, useRef } from 'react'

import Image, { type StaticImageData } from 'next/image'

export interface CarouselItem {
  id: string | number
  image: string | StaticImageData
  title: string
  description: string
}

interface BootstrapCarouselProps {
  id?: string
  items: CarouselItem[]
  interval?: number // ms
}

export const BootstrapCarousel: React.FC<BootstrapCarouselProps> = ({ id = 'carouselExampleCaptions', items, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const next = React.useCallback(() => setActiveIndex(prev => (prev + 1) % items.length), [items.length])
  const prev = () => setActiveIndex(prev => (prev - 1 + items.length) % items.length)
  const goTo = (idx: number) => setActiveIndex(idx)

  useEffect(() => {
    if (interval > 0) {
      timeoutRef.current = setTimeout(next, interval)
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
    return undefined
  }, [activeIndex, interval, items.length, next])

  return (
    <div id={id} className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? undefined : 'lazy'}
            sizes="(max-width: 420px) 370px,
              (max-width: 640px) 576px,
              (max-width: 768px) 338px,
              (max-width: 1024px) 452px,
              (max-width: 1024px) 568px,
              640px"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 text-white flex flex-col items-start">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{item?.title}</h3>
            <p className="text-base md:text-sm pb-2">{item?.description}</p>
          </div>
        </div>
      ))}
      {/* Controles */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
        onClick={prev}
        aria-label="Anterior"
      >
        <span aria-hidden="true">&#10094;</span>
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
        onClick={next}
        aria-label="Próximo"
      >
        <span aria-hidden="true">&#10095;</span>
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border border-white ${idx === activeIndex ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => goTo(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
