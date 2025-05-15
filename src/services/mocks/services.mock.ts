import i1 from '@/assets/services/atacado/01.jpg'
import i4 from '@/assets/services/bone/01.jpg'
import i5 from '@/assets/services/corte/01.jpg'
import i7 from '@/assets/services/especiais/01.jpg'
import i3 from '@/assets/services/jaleco/02.jpg'
import i6 from '@/assets/services/laser/01.jpg'
import i2 from '@/assets/services/uniforme/01.jpg'
import i0 from '@/assets/services/varejo/01.jpg'

import { type Service } from '../domain/services'

export const mockServices: Service[] = [
  {
    id: 1,
    title: 'Bordados no Varejo',
    description: 'Realizamos bordados em peças únicas, com preços especiais para varejo.',
    price: 1.12,
    image: i0
  },
  {
    id: 7,
    title: 'Bordados no Atacado',
    description: 'Realizamos bordados em grande escala, com preços especiais para atacado.',
    price: 1.12,
    image: i1
  },
  {
    id: 2,
    title: 'Borados em uniformes',
    description: 'Traga seu uniforme para bordar logotipos, nomes, símbolos. Bordamos qualquer desenho em vários estilos e cores.',
    price: 2.1,
    image: i2
  },
  {
    id: 3,
    title: 'Bordados em Jalecos',
    description:
      'Personalize com bordado em jaleco. Traga seu jaleco para bordar logotipos, nomes, símbolos. Bordamos qualquer desenho em vários estilos e cores.',
    price: 3.2,
    image: i3
  },
  {
    id: 4,
    title: 'Bordado em Boné',
    description:
      'Bordado em bonés. Bordamos seu boné mesmo montado (fechado), pois contamos com máquinas e equipamentos de ultima geração, com a melhor qualidade do mercado.',
    price: 2.5,
    image: i4
  },
  {
    id: 9,
    title: 'Bordados especiais',
    description:
      'Realizamos bordados em jaquetas, personalizados para cada brasão em especial, contamos com uma equipe de desenhistas para melhor atender suas necessidades.',
    price: 1.5,
    image: i7
  },
  {
    id: 6,
    title: 'Corte a Laser',
    description: 'Realizamos gravações a laser, em vidro, metais, MDF, entre outros materiais.',
    price: 1.5,
    image: i5
  },
  {
    id: 8,
    title: 'Gravações a Laser',
    description: 'Desenvolvemos lindas peças no corte a laser. Cortes limpos e com precisão.',
    price: 3.5,
    image: i6
  }
]
