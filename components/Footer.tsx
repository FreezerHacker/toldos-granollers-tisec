import Link from 'next/link';
import Icon from './Icon';
import Logo from './Logo';
import { fullAddress, paths, phoneHref, site } from '@/lib/site';

export default function Footer({ services }: { services: Array<{ slug: string; name: string }> }) {
  return (
    <footer className="footer">
      <div className="shade-band" aria-hidden="true" />
      <div className="wrap footer__top">
        <p className="footer__claim">Toldos en Granollers y Canovelles.<br /><em>Medimos gratis, montamos bien.</em></p>
        <a className="footer__phone" href={phoneHref}>{site.phoneDisplay}</a>
      </div>
      <div className="wrap footer__grid">
        <div>
          <Link className="logo logo--light" href={paths.home}>
            <Logo />
            <span className="logo__words"><span className="logo__top">Toldos Granollers</span><span className="logo__name">Tisec</span></span>
          </Link>
          <p className="footer__about">{site.description}</p>
          <p className="footer__lang"><Icon name="globe" size={16} /> Atendemos en català, castellano e English.</p>
        </div>
        <div>
          <h2 className="footer__title">Toldos Granollers</h2>
          <ul>{services.map((s) => <li key={s.slug}><Link href={`/${s.slug}/`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="footer__title">Zonas</h2>
          <ul>
            <li><Link href={paths.home}>Toldos en Granollers</Link></li>
            <li><Link href={paths.canovelles}>Toldos en Canovelles</Link></li>
          </ul>
          <h2 className="footer__title footer__title--gap">Empresa</h2>
          <ul>
            <li><Link href={paths.about}>Sobre nosotros</Link></li>
            <li><Link href={paths.blog}>Blog</Link></li>
            <li><Link href={paths.contact}>Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Dónde estamos</h2>
          <ul className="footer__contact">
            <li><Icon name="pin" size={17} /><span>{fullAddress}</span></li>
            <li><Icon name="clock" size={17} /><span>{site.hours.label}</span></li>
            <li><Icon name="mail" size={17} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__legal">
        <p>© {new Date().getFullYear()} {site.legalName}</p>
        <nav aria-label="Información legal">
          <Link href={paths.legal}>Aviso legal</Link>
          <Link href={paths.privacy}>Privacidad</Link>
          <Link href={paths.cookies}>Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
