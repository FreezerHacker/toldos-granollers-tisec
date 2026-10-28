import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import { Banner, PageTitle, PromiseStrip } from '@/components/Sections';
import { homePromises } from '@/lib/home';
import { fullAddress, paths, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre nosotros | Toldos Granollers Tisec',
  description: 'Quiénes somos en Toldos Granollers Tisec: instaladores de toldos y pérgolas en Granollers y Canovelles, con base en Sant Antoni Maria Claret.',
  alternates: { canonical: paths.about },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Granollers', href: '/' }, { label: 'Sobre nosotros' }]} />
      <PageTitle kicker="Sobre nosotros" title="Tisec: toldos de Granollers, para Granollers">
        <p>Instalamos y reparamos toldos y pérgolas desde {fullAddress}. Nuestra zona es Granollers y Canovelles.</p>
      </PageTitle>
      <div className="wrap layout">
        <article className="prose">
          <h2>Pocos municipios, mejor servicio</h2>
          <p>Decidimos no trabajar en toda la comarca. Con dos municipios cerca del taller organizamos las visitas con más margen, llegamos antes a los ajustes y conocemos cómo da el sol en cada calle.</p>
          <h2>Nuestra forma de trabajar</h2>
          <ul>
            <li><strong>Siempre medimos antes.</strong> Un precio dado por teléfono sin ver la fachada no sirve.</li>
            <li><strong>Presupuesto por escrito y cerrado.</strong> Con medidas, modelo, lona y accionamiento.</li>
            <li><strong>Te aconsejamos lo justo.</strong> Si basta con una lona nueva, no te vendemos un toldo nuevo.</li>
            <li><strong>Horario amplio.</strong> De 08:00 a 21:00, de lunes a sábado.</li>
          </ul>
          <h2>Para quién trabajamos</h2>
          <p>La mayoría de nuestros clientes son casas: terrazas, balcones, áticos y jardines. También montamos toldos y pérgolas para bares, tiendas, oficinas y empresas de Granollers y Canovelles.</p>
        </article>
        <aside>
          <div className="side-card">
            <p className="kicker">Ficha</p>
            <h2>{site.legalName}</h2>
            <ul className="side-facts">
              <li><Icon name="pin" size={17} />{fullAddress}</li>
              <li><Icon name="clock" size={17} />{site.hours.label}</li>
              <li><Icon name="globe" size={17} />Català, castellano, English</li>
            </ul>
            <Link className="btn btn--ink btn--full" href={paths.contact}>Contactar</Link>
          </div>
        </aside>
      </div>
      <PromiseStrip items={homePromises} />
      <Banner />
    </>
  );
}
