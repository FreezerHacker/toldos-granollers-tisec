import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { Quote, ServicesGrid } from '@/components/Sections';
import { getServices, getZone } from '@/lib/content';
import { breadcrumbSchema } from '@/lib/schema';
import { paths, phoneHref, site } from '@/lib/site';

const zone = getZone('canovelles')!;

export const metadata: Metadata = {
  title: zone.metaTitle,
  description: zone.metaDescription,
  alternates: { canonical: paths.canovelles },
};

export default function CanovellesPage() {
  const services = getServices();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Granollers', path: '/' }, { name: zone.title, path: paths.canovelles }])} />
      <Breadcrumbs items={[{ label: 'Toldos Granollers', href: '/' }, { label: zone.title }]} />
      <header className="svc-hero">
        <div className="wrap svc-hero__grid">
          <div>
            <p className="kicker"><span className="kicker__num">CNV</span>Zona de trabajo</p>
            <h1>{zone.title}</h1>
            <p className="svc-hero__lede">{zone.intro}</p>
            <div className="actions">
              <a className="btn btn--saffron btn--xl" href={phoneHref}><Icon name="phone" size={19} /> {site.phoneDisplay}</a>
              <a className="btn btn--line btn--xl" href="#presupuesto">Presupuesto gratis</a>
            </div>
          </div>
          <figure className="svc-hero__img"><img src="/images/toldos-granollers-hero-banner.webp" alt="Toldo a rayas en una fachada con soportales" width={600} height={720} fetchPriority="high" /></figure>
        </div>
      </header>
      <div className="wrap layout">
        <article className="prose" dangerouslySetInnerHTML={{ __html: zone.html }} />
        <aside>
          <div className="side-card">
            <p className="kicker">Canovelles</p>
            <h2>Medición gratis</h2>
            <p>Mismo servicio y mismas condiciones que en Granollers. Trabajos desde 100 €.</p>
            <a className="btn btn--ink btn--full" href={phoneHref}><Icon name="phone" size={18} /> Llamar</a>
            <p className="side-card__note"><Icon name="clock" size={15} /> {site.hours.label}</p>
          </div>
          <p><Link className="link" href="/">Toldos en Granollers <Icon name="arrow" size={15} /></Link></p>
        </aside>
      </div>
      <ServicesGrid services={services} index="CNV" eyebrow="En Canovelles" title="Servicios de toldos en Canovelles" description="Los mismos cinco servicios que en Granollers, con visita y presupuesto gratis." />
      <Quote services={services} title="Pide presupuesto de tu toldo en Canovelles" />
    </>
  );
}
