import { type CarouselItem } from '@/components/BootstrapCarousel'
import { Layout } from '@/components/Layout'
import { ScriptSchema } from '@/components/ScriptSchema'
import { SectionBgImage } from '@/components/SectionBgImage'
import SectionDescription from '@/components/SectionDescription'
import { SectionHero } from '@/components/SectionHero'
import { SectionService } from '@/components/SectionService'
import { getServices } from '@/services/api/servicesApi'
import { type Service } from '@/services/domain/services'
import { type GetServerSideProps, type NextPage } from 'next'
import Head from 'next/head'
import { type StaticImageData } from 'next/image'

type HomePageProps = { services: Service[] }

const HomePage: NextPage<HomePageProps> = ({ services }) => {
  const slides: CarouselItem[] = services.map(service => {
    return { id: service.id, title: service.title, description: service.description, image: service.image as StaticImageData }
  })
  return (
    <>
      <Head>
        <title>Empresa de Bordados e Corte a Laser - Fortaleza - Ceará</title>
        <meta
          name="description"
          content="Somos especialistas em bordados computadorizados no varejo e atacado. Confira nossas soluções: Richelieu, Apliques (Patch), Alto relevo (3D), Filigrana, Quilt, Florais"
        />
        <meta property="og:url" content="https://jrbordados.com.br" />
        <ScriptSchema services={services} />
      </Head>

      <Layout>
        <SectionHero slides={slides} />
        <SectionDescription />
        <SectionService services={services} />
        <SectionBgImage />
      </Layout>
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const services = await getServices()
  return { props: { services } }
}
