import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { Chooser, Coverage, Faqs, Hero, PromiseStrip, Quote, ServicesGrid, Steps } from '@/components/Sections';
import { getServices } from '@/lib/content';
import { homeChooser, homeFaqs, homePromises, homeSteps } from '@/lib/home';
import { businessSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Toldos Granollers | Toldos a medida y pérgolas | Tisec',
  description: 'Toldos en Granollers y Canovelles: toldos de brazo, cofre y motorizados, pérgolas bioclimáticas y reparación de lonas. Medición gratis. Desde 100 €. Llama al 936 944 304.',
  alternates: { canonical: '/' },
  openGraph: { url: '/', title: 'Toldos Granollers | Toldos Granollers Tisec' },
};

export default function Home() {
  const services = getServices();
  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <PromiseStrip items={homePromises} />
      <ServicesGrid services={services} />
      <Chooser items={homeChooser} />
      <Steps items={homeSteps} />
      <Coverage />
      <Faqs items={homeFaqs} />
      <Quote services={services} />
    </>
  );
}
