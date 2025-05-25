import React from 'react'

import img01 from '@/assets/services/jaleco/hero-01.png'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

export type HeroContentProps = { pageLoaded?: boolean }

export const HeroContent: React.FC<HeroContentProps> = () => {
  return (
    <SimpleGrid
      gap={4}
      columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
      alignItems="end"
      width="100%"
      minHeight="380px"
      justifyContent={'space-between'}
      px={{ base: 4, md: 8 }}
      pb={0}
      pt={{ base: 8, md: 16 }}
      style={{ height: '100%' }}
    >
      <GridItem alignSelf="center" h="100%" display="flex" flexDirection="column" justifyContent="center" className="mb-4">
        <h1 className="text-white mb-2 text-3xl">Bordado em Jaleco: Personalize com Nome e Logo</h1>
        <p className="text-white text-lg">Bordado computadorizado de alta precisão para seu jaleco </p>
        <div>
          <WhatsAppButton phone="558599917475" />
        </div>
      </GridItem>
      <GridItem alignSelf="end" h="100%" width={'100%'} display="flex" flexDirection="column" justifyContent="flex-end">
        <div
          style={{
            maxWidth: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minHeight: '380px',
            minWidth: '380px'
          }}
        >
          <Image
            src={img01}
            alt="Jaleco personalizado bordado"
            style={{
              maxWidth: '100%',
              display: 'block',
              objectFit: 'contain',
              objectPosition: 'bottom'
            }}
          />
        </div>
      </GridItem>
    </SimpleGrid>
  )
}
