import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

// Adiciona a prop size para controlar o tamanho dos ícones
export type SocialMediaProps = {
  iconSize?: string | number
}

type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & { children: React.ReactNode }
const SocialLink: React.FC<Props> = ({ children, ...props }) => {
  return (
    <a className="text-white sm:text-gray-300 sm:hover:text-white" target="_blank" {...props}>
      {children}
    </a>
  )
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ iconSize = '1.875rem' }) => {
  return (
    <div className="h-auto flex items-center justify-start gap-2 flex-wrap">
      <SocialLink href="https://www.instagram.com/jrbordados" title="Instagram" aria-label="Ir para o instagram">
        <FaInstagram title="Instagram" size={iconSize} />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/jrbordados" title="Facebook" aria-label="Ir para o facebook">
        <FaFacebook title="Facebook" size={iconSize} />
      </SocialLink>
      <SocialLink href="https://www.tiktok.com/@jrbordados" title="Tiktok" aria-label="Ir para o tiktok">
        <FaTiktok title="Tiktok" size={iconSize} />
      </SocialLink>
    </div>
  )
}
