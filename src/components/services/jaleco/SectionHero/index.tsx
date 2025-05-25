'use client'
import React from 'react'

import { usePageLoaded } from '@/hooks/usePageLoaded'

import { HeroContent, type HeroContentProps } from './HeroContent'
import { HeroContainer } from './styles'

type SectionHeroProps = HeroContentProps
export const SectionHero: React.FC<SectionHeroProps> = ({}) => {
  const pageLoaded = usePageLoaded()

  return (
    <HeroContainer>
      <HeroContent pageLoaded={pageLoaded} />
    </HeroContainer>
  )
}
