import type { Metadata } from 'next';
import Link from 'next/link';
import { PageTitle } from '@/components/Sections';
import { paths } from '@/lib/site';

export const metadata: Metadata = { title: 'Página no encontrada | Toldos Granollers Tisec', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <PageTitle kicker="Error 404" title="Aquí no hay ningún toldo">
      <p>Esta página no existe. Vuelve al inicio o llámanos si buscabas algo concreto.</p>
      <p><Link className="btn btn--saffron" href={paths.home}>Ir al inicio</Link></p>
    </PageTitle>
  );
}
