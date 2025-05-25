import { Layout } from '@/components/Layout'
import { SectionSocialInvite } from '@/components/SectionSocialInvite'
import { SectionArguments } from '@/components/services/jaleco/SectionArguments'
import { SectionCallToAction } from '@/components/services/jaleco/SectionCallToAction'
import { SectionHero } from '@/components/services/jaleco/SectionHero'
import { SectionHowItWorks } from '@/components/services/jaleco/SectionHowItWorks'
import { ServiceScriptSchema } from '@/components/services/ServiceScriptSchema'
import { getService } from '@/services/api/servicesApi'
import type { Service } from '@/services/domain/services'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

type ServicesJalecoPageProps = { service: Service }

const ServicesJalecoPage: NextPage<ServicesJalecoPageProps> = ({ service }) => {
  return (
    <>
      <Head>
        <title>Bordado em Jaleco - Empresa de Bordados e Corte a Laser - Fortaleza - Ceará</title>
        <meta
          name="description"
          content="Serviço de bordado computadorizado em jalecos. Personalização de jaleco com nome, logo de clínica ou universidade. Orçamento rápido e preço competitivo."
        />
        <meta property="og:url" content="https://jrbordados.com.br/services/jaleco" />
        <ServiceScriptSchema service={service} />
      </Head>
      <Layout>
        <SectionHero />
        <SectionHowItWorks />
        <SectionArguments />
        <SectionCallToAction />
        <SectionSocialInvite />
      </Layout>
    </>
  )
}

export default ServicesJalecoPage

export const getServerSideProps: GetServerSideProps<ServicesJalecoPageProps> = async () => {
  const service = await getService(3)
  return { props: { service } }
}
