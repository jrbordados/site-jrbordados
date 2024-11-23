import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & { children: React.ReactNode }
const SocialLink: React.FC<Props> = ({ children, ...props }) => {
  return (
    <a className="text-white sm:text-gray-300 sm:hover:text-white" target="_blank" {...props}>
      {children}
    </a>
  )
}

export const SocialMedia: React.FC = () => {
  return (
    <div className="text-3xl/8 h-auto flex items-center justify-start gap-2 flex-wrap">
      <SocialLink href="https://www.instagram.com/jrbordados">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/jrbordados">
        <FaFacebook />
      </SocialLink>
    </div>
  )
}
