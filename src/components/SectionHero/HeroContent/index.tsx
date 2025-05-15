import React from 'react'

import { BootstrapCarousel, type CarouselItem } from '@/components/BootstrapCarousel'
import { Rating } from '@/components/Rating'
import { Box, SimpleGrid, GridItem } from '@chakra-ui/react'

export type HeroContentProps = { slides?: CarouselItem[] }

export const HeroContent: React.FC<HeroContentProps> = ({ slides = [] }) => {
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
        width: '90%'
      }}
      columns={{ base: 1, md: 2, lg: 2, xl: 2 }}
    >
      <GridItem alignSelf={'center'}>
        <h2 className="text-white mb-lg-2 mb-2">Empresa de Bordados</h2>
        <div className="flex flex-wrap justify-items-center my-2">
          <Box color={{ base: 'white', _dark: 'red' }}>
            <Rating value={4} gap={2}>
              4/5
            </Rating>
          </Box>
        </div>
        <p className="text-white text-lg">290+ avaliações no Google </p>
      </GridItem>
      <GridItem
        alignSelf={'center'}
        // border={'1px dashed #fff'}
      >
        {slides?.length ? <BootstrapCarousel items={slides} interval={5000} /> : null}
      </GridItem>
    </SimpleGrid>
  )
}
