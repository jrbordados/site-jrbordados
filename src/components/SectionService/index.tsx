import React from 'react'

import { type Service } from '@/services/domain/services'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

import { Content } from '../Content'
import { ServiceItem } from './ServiceItem'

type SectionServiceProps = { services: Service[] }

export const SectionService: React.FC<SectionServiceProps> = ({ services }) => {
  if (!services?.length) return null
  return (
    <section itemProp="services">
      <Content>
        <h2 className="text-center my-2">Serviços mais procurados</h2>
        <p className="text-center my-8">Conheça os serviços mais procurados em Fortaleza</p>

        <SimpleGrid columns={{ lg: 2, xl: 3, md: 2, base: 1, sm: 1 }} gap={4}>
          {services.map(service => {
            return (
              <GridItem key={service.id}>
                <ServiceItem {...service} />
              </GridItem>
            )
          })}
        </SimpleGrid>
      </Content>
    </section>
  )
}
