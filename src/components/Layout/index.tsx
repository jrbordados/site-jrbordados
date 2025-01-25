import React from 'react'

import { clsx } from 'clsx'
import dynamic from 'next/dynamic'
import { Montserrat } from 'next/font/google'

import { Footer } from './Footer'
import { Header } from './Header'

export const MetaPixel = dynamic(() => import('@/components/MetaPixel'), {
  ssr: false
})

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const className = clsx(montserrat.variable, 'font-sans')
  return (
    <div className={className}>
      <MetaPixel />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
