import React from 'react'

import Image from 'next/image'

interface Slide {
  image: string
  title: string
  description: string
}

interface CarouselProps {
  slides: Slide[]
  interval?: number // ms
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 5000 }) => {
  const [current, setCurrent] = React.useState(0)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const nextSlide = React.useCallback(() => setCurrent(prev => (prev + 1) % slides.length), [slides])
  const prevSlide = React.useCallback(() => setCurrent(prev => (prev - 1 + slides.length) % slides.length), [slides])
  const goToSlide = (idx: number) => setCurrent(idx)

  React.useEffect(() => {
    if (interval > 0) {
      timeoutRef.current = setTimeout(nextSlide, interval)
      return () => {
        if (!!timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }
  }, [current, interval, nextSlide, slides])

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg">
      {slides.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <Image src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow mb-2">{slide.title}</h2>
            <p className="text-white text-base md:text-lg drop-shadow">{slide.description}</p>
          </div>
        </div>
      ))}
      {/* Setas */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
        onClick={nextSlide}
        aria-label="Próximo"
      >
        &#8594;
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border border-white ${idx === current ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
