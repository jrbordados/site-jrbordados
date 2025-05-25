import React from 'react'

type Props = {
  children?: React.ReactNode
}

export const SiteTitle: React.FC<Props> = ({ children }) => {
  return <span className="font-bold font-sans text-2xl p-0 m-0 block">{children}</span>
}
