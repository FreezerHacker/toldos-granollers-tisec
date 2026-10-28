import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { Coverage, PageTitle, Quote } from '@/components/Sections';
import { getServices } from '@/lib/content';
import { breadcrumbSchema } from '@/lib/schema';
import { paths, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto y presupuesto | Toldos Granollers Tisec',
  description: `Presupuesto de toldos en Granollers y Canovelles: llama al ${site.phoneDisplay} de lunes a sábado de 08:00 a 21:00 o usa el formulario. Medición gratis.`,
  alternates: { canonical: paths.contact },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Granollers', path: '/' }, { name: 'Contacto', path: paths.contact }])} />
      <Breadcrumbs items={[{ label: 'Toldos Granollers', href: '/' }, { label: 'Contacto' }]} />
      <PageTitle kicker="Contacto" title="Cuéntanos qué toldo necesitas">
        <p>Llámanos o rellena el formulario y te llamamos para quedar. Atendemos en català, castellano e English.</p>
      </PageTitle>
      <Quote services={getServices()} title="Formulario de presupuesto" />
      <Coverage />
    </>
  );
}
