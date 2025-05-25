import React from 'react'

import { type Service } from '@/services/domain/services'

type Props = {
  service: Service
}
export const ServiceScriptSchema: React.FC<Props> = ({ service }) => {
  const serviceOffered = {
    '@type': 'Service',
    name: service.title,
    description: service.description,
    image: service.image
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'JR Bordados e Corte a Laser',
          description:
            'Especialistas em bordados computadorizados no varejo e atacado. Soluções: Richelieu, Apliques (Patch), Alto relevo (3D), Filigrana, Quilt, Florais.',
          url: 'https://jrbordados.com.br',
          image: 'https://jrbordados.com.br/logo-92.png',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Fortaleza',
            addressRegion: 'CE',
            addressCountry: 'BR',
            postalCode: '60450-360'
          },
          telephone: '+55 85 9 9991-7475',
          areaServed: 'Fortaleza',
          serviceOffered
        })
      }}
    />
  )
}
