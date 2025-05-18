import React from 'react'

import { getBackgroundImage } from '@/helpers/image'
import { getImageProps } from 'next/image'

export const SectionBgImage: React.FC = () => {
  const { props } = getImageProps({ alt: 'maquina de bordar', width: 1680, height: 618, src: '/capa.jpg' })
  const backgroundImage = getBackgroundImage(props.srcSet)

  return (
    <>
      <div className="h-24" />
      <div className="h-[300px] bg-no-repeat bg-fixed bg-top bg-cover sm:h-[500px]" style={{ backgroundImage }} />
      <div className="h-[300px]" />
    </>
  )
}
