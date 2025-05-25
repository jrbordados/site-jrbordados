import React from 'react'

const argumentsList = [
  {
    title: 'Personalização Completa',
    description: 'Personalização de jaleco com seu nome e logo de instituição'
  },
  {
    title: 'Leitura Perfeita',
    description: 'Bordado nome jaleco: leitura perfeita mesmo de longe'
  },
  {
    title: 'Uniformes Profissionais',
    description: 'Bordado em uniformes profissionais: jalecos, aventais e mais'
  },
  {
    title: 'Qualidade Garantida',
    description: 'Qualidade garantida em bordado computadorizado'
  }
]

export const SectionArguments: React.FC = () => (
  <section className="block mt-0 m-auto max-w-screen-lg px-3 py-3 md:py-6 relative">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center">Por que escolher nosso serviço de bordar logo em jaleco?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {argumentsList.map((arg, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-green-100 hover:shadow-lg transition-shadow"
        >
          <span className="text-lg font-semibold text-green-800 mb-2">{arg.title}</span>
          <p className="text-gray-700 text-base">{arg.description}</p>
        </div>
      ))}
    </div>
  </section>
)
