import React from 'react'

import img from '@/assets/logo-92.png'
import { Content } from '@/components/Content'
import Image from 'next/image'

import { SiteTitle } from './SiteTitle'

export const Header: React.FC = () => {
  return (
    <div className="max-w-full block m-0 p-0">
      <Content>
        <div className="flex flex-row flex-nowrap justify-start items-center gap-1">
          <Image className="dark:invert" src={img} alt="JR Bordados" width={64} height={64} priority />
          <SiteTitle>JR Bordados</SiteTitle>
        </div>
      </Content>
    </div>
  )
}
