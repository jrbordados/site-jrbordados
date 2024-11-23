import { Layout } from '@/components/Layout'
import { SectionBgImage } from '@/components/SectionBgImage'
import { SectionHero } from '@/components/SectionHero'
import { SectionService } from '@/components/SectionService'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Empresa de Bordados e Corte a Laser - Fortaleza - Ceará</title>
        <meta
          name="description"
          content="Somos especialistas em bordados computadorizados no varejo e atacado. Confira nossas soluções: Richelieu, Apliques (Patch), Alto relevo (3D), Filigrana, Quilt, Florais"
        />
        <meta property="og:url" content="https://jrbordados.com.br" />
      </Head>

      <Layout>
        <SectionHero />
        <SectionService />
        <SectionBgImage />
      </Layout>
    </>
  )
}
