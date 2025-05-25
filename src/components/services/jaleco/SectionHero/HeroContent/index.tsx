import React from 'react'

import img01 from '@/assets/services/jaleco/hero-01.png'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

export type HeroContentProps = { pageLoaded?: boolean }

export const HeroContent: React.FC<HeroContentProps> = () => {
  return (
    <SimpleGrid
      css={{
        gap: '1rem',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'stretch',
        zIndex: 3,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        minHeight: '380px' // Reservar espaço para evitar CLS
      }}
      columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
    >
      <GridItem alignSelf={'center'}>
        <h2 className="text-white mb-2 text-3xl">Bordado em Jaleco: Personalize com Nome e Logo</h2>
        <p className="text-white text-lg">Bordado computadorizado de alta precisão para seu jaleco </p>
        <WhatsAppButton phone="558599917475" />
      </GridItem>
      <GridItem alignSelf={'center'}>
        <Image
          src={img01}
          alt="Jaleco personalizado bordado"
          style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
        />
      </GridItem>
    </SimpleGrid>
  )
}
