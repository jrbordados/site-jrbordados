import React from 'react'

import { type Service } from '@/services/domain/services'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const ServiceItem: React.FC<Service> = ({ title, image, slug }) => {
  const content = (
    <>
      <Box className="xl:size-[320px] lg:size-[350px] overflow-hidden">
        <Image itemProp="image" src={image} alt={title} loading="lazy" />
      </Box>
      <h3 className="text-center pt-1 pb-4">{title}</h3>
    </>
  )
  return slug ? <Link href={`/services/${slug}`}>{content}</Link> : <div>{content}</div>
}
