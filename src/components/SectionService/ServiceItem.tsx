import React from 'react'

import { type Service } from '@/services/domain/services'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

export const ServiceItem: React.FC<Service> = ({ title, image }) => {
  return (
    <div>
      <Box className="xl:size-[320px] lg:size-[350px] overflow-hidden">
        <Image itemProp="image" src={image} alt={title} />
      </Box>
      <h3 itemProp="name" className="text-center pt-1 pb-4">
        {title}
      </h3>
    </div>
  )
}
