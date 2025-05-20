import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export type WhatsAppButtonProps = {
  phone?: string // Número no formato internacional, ex: 5511999999999
  message?: string // Mensagem opcional pré-preenchida
  children?: React.ReactNode // Texto ou conteúdo do botão
  className?: string // Classes extras para estilização
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone = '5511999999999',
  message = '',
  children = 'Fale conosco no WhatsApp',
  className = ''
}) => {
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-colors duration-200 ${className}`}
    >
      <span className="flex items-center gap-2">
        <FaWhatsapp size={32} /> {children}
      </span>
    </a>
  )
}
