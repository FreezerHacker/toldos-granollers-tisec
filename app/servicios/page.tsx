import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { Banner, Chooser, PageTitle, ServicesGrid } from '@/components/Sections';
import { getServices } from '@/lib/content';
import { homeChooser } from '@/lib/home';
import { breadcrumbSchema } from '@/lib/schema';
import { paths } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios de toldos en Granollers | Toldos Granollers Tisec',
  description: 'Todos nuestros servicios de toldos en Granollers y Canovelles: toldos de brazo, cofre y motorizados, pérgolas bioclimáticas y reparación de lonas.',
  alternates: { canonical: paths.services },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Granollers', path: '/' }, { name: 'Servicios', path: paths.services }])} />
      <Breadcrumbs items={[{ label: 'Toldos Granollers', href: '/' }, { label: 'Servicios' }]} />
      <PageTitle kicker="Servicios" title="Servicios de toldos en Granollers">
        <p>Toldos nuevos, motorización, pérgolas bioclimáticas y reparación de lonas. Todo a medida, en Granollers y Canovelles.</p>
      </PageTitle>
      <ServicesGrid services={getServices()} title="Elige tu servicio" description="Cada uno tiene su página con proceso, ventajas y preguntas frecuentes." />
      <Chooser items={homeChooser} />
      <Banner />
    </>
  );
}
