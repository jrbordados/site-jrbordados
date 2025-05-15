import React from 'react'

import bgFooter from '@/assets/bg-barudan.jpg'
import { Content } from '@/components/Content'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

import { FooterItemTitle } from './FooterItemTitle'
import { SocialMedia } from './SocialMedia'
import { StyledFooter } from './styles'

export const Footer: React.FC = () => {
  return (
    <StyledFooter style={{ backgroundImage: `url('${bgFooter?.src}')` }}>
      <Content style={{ zIndex: 10 }}>
        <h4 className="text-white font-bold text-2xl">JR Bordados</h4>
        <p className="text-white mb-5">Bordados computadorizados - Corte e Gravações a Laser</p>
        <SimpleGrid columns={{ lg: 3, xl: 4, md: 2, base: 1, sm: 1 }} gap={4} className="text-white justify-around">
          <GridItem>
            <FooterItemTitle>Localização</FooterItemTitle>
            <p className="mb-3">
              <span>Rua, Professor Anacleto, 576</span>
              <br />
              <span>Parquelândia</span> - <span>Fortaleza - CE</span>
            </p>
          </GridItem>
          <GridItem>
            <FooterItemTitle>Contato</FooterItemTitle>
            <p className="mb-3">
              <span>(85) 3243-1872</span>
              <br />
              <span>(85) 9 9991-7475</span>
            </p>
          </GridItem>
          <GridItem>
            <FooterItemTitle>Horário de atendimento</FooterItemTitle>
            <p className="mb-3">
              <span>Segunda - Sexta</span>
              <br />
              <span>8h - 18h</span>
            </p>
            <p>
              <span>Sábado</span>
              <br />
              <span>8h - 12h</span>
            </p>
          </GridItem>
          <GridItem>
            <FooterItemTitle>Midias Sociais</FooterItemTitle>
            <SocialMedia />
          </GridItem>
        </SimpleGrid>
      </Content>
    </StyledFooter>
  )
}
