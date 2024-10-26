import { Layout } from "@/components/Layout";
import { SectionHero } from "@/components/SectionHero";
import { SectionService } from "@/components/SectionService";

export default function Home() {
  return (
    <Layout>
      <main>
        <SectionHero />
        <SectionService />
        <div>sdsdsd</div>
      </main>
    </Layout>
  );
}
