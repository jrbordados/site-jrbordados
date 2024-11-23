import React from 'react'

import { HeroContent } from './HeroContent'
import { HeroContainer, Overlay, Video, VideoWrap } from './styles'

export const SectionHero: React.FC = () => {
  return (
    <HeroContainer>
      <VideoWrap>
        <Video autoPlay muted loop poster="">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoWrap>
      <Overlay />
      <HeroContent />
    </HeroContainer>
  )
}
