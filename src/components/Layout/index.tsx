import React from 'react'

import { usePageLoaded } from '@/hooks/usePageLoaded'
import { clsx } from 'clsx'
import dynamic from 'next/dynamic'
import { Montserrat } from 'next/font/google'

import { Footer } from './Footer'
import { Header } from './Header'

export const MetaPixel = dynamic(() => import('@/components/MetaPixel').then(ctx => ctx.MetaPixelClient), {
  ssr: false
})

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const pageLoaded = usePageLoaded()
  const className = clsx(montserrat.variable, 'font-sans')
  return (
    <div className={className}>
      {pageLoaded ? <MetaPixel /> : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
