import React from 'react'

import { HeroContent, type HeroContentProps } from './HeroContent'
import { HeroContainer, Overlay, Video, VideoWrap } from './styles'

type SectionheroProps = HeroContentProps
export const SectionHero: React.FC<SectionheroProps> = ({ slides }) => {
  return (
    <HeroContainer>
      <VideoWrap>
        <Video autoPlay muted loop poster="">
          <source src="/bordado.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoWrap>
      <Overlay />
      <HeroContent slides={slides} />
    </HeroContainer>
  )
}
