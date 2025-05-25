import React from 'react'

const steps = [
  {
    title: '1. Traga o seu jaleco',
    description: 'Você envia seu jaleco próprio (não vendemos jalecos)'
  },
  {
    title: '2. Escolha o desenho',
    description: 'Você escolhe ou envia sua arte, ou apenas seu nome'
  },
  {
    title: '3. Aprove o layout',
    description: 'Recebe o layout prévio para aprovar o bordado customizado'
  },
  {
    title: '4. Receba seu jaleco bordado',
    description: 'Em até 2 dias, devolvemos seu jaleco com bordado ou uniforme impecável'
  }
]

export const SectionHowItWorks: React.FC = () => (
  <section className="w-full mx-auto py-12 px-4 flex flex-col gap-8 bg-gray-100 dark:bg-gray-800 ">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Como funciona a personalização?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-green-100 relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-md">
              {idx + 1}
            </span>
            <span className="text-lg font-semibold text-green-800 mb-2 mt-6">{step.title}</span>
            <p className="text-gray-700 text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
