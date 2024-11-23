import React from 'react'

// import { Container } from './styles';

type Props = {
  children?: React.ReactNode
}

export const SiteTitle: React.FC<Props> = ({ children }) => {
  return <h1 className="font-bold font-sans text-2xl p-0 m-0 block">{children}</h1>
}
