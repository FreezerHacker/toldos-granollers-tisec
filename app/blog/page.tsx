import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import { PageTitle } from '@/components/Sections';
import { getPosts } from '@/lib/content';
import { paths } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog de toldos | Toldos Granollers Tisec',
  description: 'Consejos sobre precios, mantenimiento y tipos de toldos, escritos por Toldos Granollers Tisec para casas de Granollers y Canovelles.',
  alternates: { canonical: paths.blog },
};

const fmt = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium', timeZone: 'UTC' });

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Granollers', href: '/' }, { label: 'Blog' }]} />
      <PageTitle kicker="Blog" title="Lo que conviene saber de tu toldo">
        <p>Precios, cuidados y diferencias entre modelos, explicados sin tecnicismos.</p>
      </PageTitle>
      <section className="block">
        <div className="wrap posts">
          {getPosts().map((p) => (
            <Link key={p.slug} className="post" href={paths.post(p.slug)}>
              <time dateTime={p.publishDate}>{fmt.format(new Date(p.publishDate))}</time>
              <div><h2>{p.title}</h2><p>{p.description}</p></div>
              <Icon name="arrow" size={22} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
