import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { PageTitle } from '@/components/Sections';
import { paths, phoneHref, site } from '@/lib/site';

export const metadata: Metadata = { title: 'Solicitud recibida | Toldos Granollers Tisec', robots: { index: false, follow: true } };

export default function ThanksPage() {
  return (
    <PageTitle kicker="Recibido" title="Gracias. Te llamamos muy pronto.">
      <p>Tenemos tus datos. Te llamaremos en horario de {site.hours.label.toLowerCase()} para quedar y pasar a medir.</p>
      <p><a className="btn btn--saffron" href={phoneHref}><Icon name="phone" size={18} /> ¿Urgente? {site.phoneDisplay}</a></p>
      <p><Link className="link" href={paths.home}>Volver al inicio <Icon name="arrow" size={16} /></Link></p>
    </PageTitle>
  );
}
