import React from 'react'

import { SectionHowItWorks } from './SectionHowItWorks'

export const SectionContent: React.FC = () => (
  <section className="w-full max-w-5xl mx-auto py-12 px-4 flex flex-col gap-12">
    {/* Nossos Diferenciais */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Nossos Diferenciais</h2>
      <ul className="list-disc pl-6 text-lg text-gray-800 space-y-2">
        <li>Atendimento rápido e preço para bordar nome em jaleco competitivo</li>
        <li>Prova digital antes do bordado personalizado</li>
        <li>Experiência em bordados em uniformes de laboratórios, hospitais e faculdades</li>
        <li>Fácil orçamento online: escolha “nome bordado em jaleco” e receba proposta em minutos</li>
      </ul>
    </div>

    <SectionHowItWorks />
  </section>
)
