'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import Logo from './Logo';
import { paths, phoneHref, site } from '@/lib/site';

const nav = [
  { label: 'Servicios', href: paths.services },
  { label: 'Canovelles', href: paths.canovelles },
  { label: 'Nosotros', href: paths.about },
  { label: 'Blog', href: paths.blog },
  { label: 'Contacto', href: paths.contact },
];

export default function Header({ services }: { services: Array<{ slug: string; name: string }> }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const onService = services.some((s) => pathname === `/${s.slug}/`);

  return (
    <>
      <header className="masthead">
        <div className="wrap masthead__row">
          <Link className="logo" href={paths.home} aria-label={`${site.name}, inicio`}>
            <Logo />
            <span className="logo__words">
              <span className="logo__top">Toldos Granollers</span>
              <span className="logo__name">Tisec</span>
            </span>
          </Link>

          <nav id="menu" className="menu" aria-label="Navegación principal" data-open={open || undefined}>
            <ul className="menu__main">
              {nav.map((item) => {
                const active = pathname.startsWith(item.href) || (item.href === paths.services && onService);
                return <li key={item.href}><Link href={item.href} aria-current={active ? 'page' : undefined}>{item.label}</Link></li>;
              })}
            </ul>
            <ul className="menu__sub">
              {services.map((s) => <li key={s.slug}><Link href={`/${s.slug}/`}>{s.name}</Link></li>)}
            </ul>
          </nav>

          <div className="masthead__cta">
            <span className="masthead__hours"><span className="dot" aria-hidden="true" />{site.hours.short}</span>
            <a className="btn btn--saffron" href={phoneHref}><Icon name="phone" size={18} /> {site.phoneDisplay}</a>
          </div>

          <button className="burger" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} size={24} />
            <span className="sr-only">Abrir menú</span>
          </button>
        </div>
      </header>

      <div className="dock">
        <a className="dock__call" href={phoneHref}><Icon name="phone" size={19} /> Llamar ahora</a>
        <Link className="dock__form" href={`${paths.contact}#presupuesto`}>Presupuesto</Link>
      </div>
    </>
  );
}
