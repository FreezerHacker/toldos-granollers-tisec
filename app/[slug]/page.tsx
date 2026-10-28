import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { Faqs, Quote, Steps } from '@/components/Sections';
import { getService, getServices } from '@/lib/content';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { paths, phoneHref, site } from '@/lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription, alternates: { canonical: `/${s.slug}/` }, openGraph: { url: `/${s.slug}/`, title: s.metaTitle, description: s.metaDescription, images: [s.image] } };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const all = getServices();
  const others = all.filter((o) => o.slug !== s.slug);
  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Granollers', path: '/' }, { name: 'Servicios', path: paths.services }, { name: s.title, path: `/${s.slug}/` }])} />
      {s.faqs.length > 0 && <JsonLd data={faqSchema(s.faqs)} />}
      <Breadcrumbs items={[{ label: 'Toldos Granollers', href: '/' }, { label: 'Servicios', href: paths.services }, { label: s.title }]} />
      <header className="svc-hero">
        <div className="wrap svc-hero__grid">
          <div>
            <p className="kicker"><span className="kicker__num">{String(s.order).padStart(2, '0')}</span>Toldos Granollers · {s.name}</p>
            <h1>{s.title}</h1>
            <p className="svc-hero__lede">{s.heroStatement}</p>
            <div className="actions">
              <a className="btn btn--saffron btn--xl" href={phoneHref}><Icon name="phone" size={19} /> {site.phoneDisplay}</a>
              <a className="btn btn--line btn--xl" href="#presupuesto">Presupuesto gratis</a>
            </div>
          </div>
          <figure className="svc-hero__img"><img src={s.image} alt={s.imageAlt} width={600} height={420} fetchPriority="high" /></figure>
        </div>
      </header>

      <div className="wrap layout">
        <article className="prose">
          <p className="lede">{s.shortDescription}</p>
          <ul className="ticks">
            {s.benefits.map((b) => <li key={b}><Icon name="check" size={20} /><span>{b}</span></li>)}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: s.html }} />
        </article>
        <aside>
          <div className="side-card">
            <p className="kicker">Medición gratis</p>
            <h2>¿Te lo medimos?</h2>
            <p>Vamos a tu casa en Granollers o Canovelles y te damos el precio por escrito. Hay trabajos desde 100 €.</p>
            <a className="btn btn--ink btn--full" href={phoneHref}><Icon name="phone" size={18} /> Llamar</a>
            <a className="btn btn--line btn--full" href="#presupuesto">Escribirnos</a>
            <p className="side-card__note"><Icon name="clock" size={15} /> {site.hours.label}</p>
          </div>
          <nav className="side-links" aria-label="Otros servicios">
            <p className="kicker">Más toldos en Granollers</p>
            <ul>{others.map((o) => <li key={o.slug}><Link href={`/${o.slug}/`}>{o.title} <Icon name="arrow" size={15} /></Link></li>)}</ul>
          </nav>
        </aside>
      </div>

      <Steps items={s.process} index="→" title={`Así trabajamos: ${s.name.toLowerCase()}`} description="Desde la visita hasta que lo dejamos funcionando." />
      <Faqs items={s.faqs} index="?" title={`Dudas sobre ${s.name.toLowerCase()} en Granollers`} />
      <Quote services={all} selected={s.name} title={`Presupuesto de ${s.name.toLowerCase()} en Granollers`} />
    </>
  );
}
