import React from 'react'

import { SocialMedia } from '@/components/Layout/Footer/SocialMedia'

export const SectionSocialInvite: React.FC = () => (
  <section className="w-full py-12 flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-gray-200">Conheça melhor nossos trabalhos nas redes sociais</h2>
    <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6">
      Acompanhe nossos projetos, novidades e inspirações no Instagram, Facebook e TikTok. Siga, curta e compartilhe!
    </p>
    <SocialMedia iconSize="3.5rem" />
  </section>
)
