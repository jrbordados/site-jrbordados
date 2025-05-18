import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & { children: React.ReactNode; title: string }
const SocialLink: React.FC<Props> = ({ children, title, ...props }) => {
  return (
    <a className="text-white sm:text-gray-300 sm:hover:text-white" target="_blank" {...props} title={title}>
      {children}
    </a>
  )
}

export const SocialMedia: React.FC = () => {
  return (
    <div className="text-3xl/8 h-auto flex items-center justify-start gap-2 flex-wrap">
      <SocialLink href="https://www.instagram.com/jrbordados" title="Instagram">
        <FaInstagram title="Instagram" />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/jrbordados" title="Facebook">
        <FaFacebook title="Facebook" />
      </SocialLink>
      <SocialLink href="FaTiktok" title="Tiktok">
        <FaTiktok title="Tiktok" />
      </SocialLink>
    </div>
  )
}
