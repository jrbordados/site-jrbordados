'use client'
import React from 'react'

import { usePageLoaded } from '@/hooks/usePageLoaded'

import { HeroContent, type HeroContentProps } from './HeroContent'
import { HeroContainer, Overlay, Video, VideoWrap } from './styles'

type SectionHeroProps = HeroContentProps
export const SectionHero: React.FC<SectionHeroProps> = ({ slides }) => {
  const pageLoaded = usePageLoaded()

  return (
    <HeroContainer>
      <VideoWrap>
        {pageLoaded && (
          <Video autoPlay muted loop poster="">
            <source src="/bordado.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        )}
      </VideoWrap>
      <Overlay />
      <HeroContent slides={slides} pageLoaded={pageLoaded} />
    </HeroContainer>
  )
}
