import { Layout } from '@/components/Layout'
import { SectionBgImage } from '@/components/SectionBgImage'
import { SectionHero } from '@/components/SectionHero'
import { SectionService } from '@/components/SectionService'

export default function Home() {
  return (
    <Layout>
      <SectionHero />
      <SectionService />
      <SectionBgImage />
    </Layout>
  )
}
