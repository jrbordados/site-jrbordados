import React from 'react'

import { WhatsAppButton } from '@/components/WhatsAppButton'

const CTA_TEXT = 'Peça seu orçamento grátis agora e garanta um jaleco com bordado personalizado de alta qualidade!'

export const SectionCallToAction: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-4 bg-green-50">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-6 max-w-2xl">{CTA_TEXT}</h3>
      <WhatsAppButton phone="558599917475" className="text-lg px-8 py-4">
        Falar no WhatsApp
      </WhatsAppButton>
    </section>
  )
}
