import Link from 'next/link';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';
import type { Faq, Service, Step } from '@/lib/content';
import { fullAddress, mapsUrl, paths, phoneHref, site } from '@/lib/site';

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="kicker"><span className="kicker__num">GRN</span>Toldos Granollers · Canovelles</p>
          <h1>Toldos en Granollers, <em>hechos a la medida de tu casa.</em></h1>
          <p className="hero__lede">
            En <strong>Toldos Granollers Tisec</strong> instalamos toldos de brazo, cofre y motorizados, montamos pérgolas bioclimáticas y reparamos lonas.
            Pasamos a medir gratis y te damos el precio por escrito.
          </p>
          <div className="actions">
            <a className="btn btn--saffron btn--xl" href={phoneHref}><Icon name="phone" size={20} /> Llamar · {site.phoneDisplay}</a>
            <a className="btn btn--line btn--xl" href="#presupuesto">Quiero presupuesto <Icon name="arrow" size={18} /></a>
          </div>
        </div>
        <figure className="hero__art">
          <div className="arch">
            <img src="/images/toldos-granollers-hero-banner.webp" width={600} height={720} alt="Toldo a rayas instalado sobre los soportales de una casa en Granollers" fetchPriority="high" />
          </div>
          <figcaption className="stamp">
            <span className="stamp__big">100 €</span>
            <span className="stamp__small">trabajos desde</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function PromiseStrip({ items }: { items: Array<{ kicker: string; title: string; description: string }> }) {
  return (
    <section className="promises" aria-label="Por qué Tisec">
      <ul className="wrap promises__grid">
        {items.map((item) => (
          <li key={item.kicker}>
            <span className="promises__num">{item.kicker}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServicesGrid({
  services,
  index = '01',
  eyebrow = 'Servicios',
  title = 'Toldos en Granollers para cada terraza',
  description = 'Cinco servicios, todos a medida. Entra en el que te interese para ver cómo trabajamos, ventajas y dudas frecuentes.',
}: { services: Service[]; index?: string; eyebrow?: string; title?: string; description?: string }) {
  return (
    <section className="block" id="servicios">
      <div className="wrap">
        <SectionHeading index={index} eyebrow={eyebrow} title={title} description={description} />
        <div className="cards">
          {services.map((s, i) => (
            <Link key={s.slug} className="card" href={`/${s.slug}/`}>
              <span className="card__img">
                <img src={s.image} alt={s.imageAlt} width={600} height={420} loading="lazy" decoding="async" />
              </span>
              <span className="card__body">
                <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
                <span className="card__more">Ver {s.name.toLowerCase()} <Icon name="arrow" size={17} /></span>
              </span>
            </Link>
          ))}
          <div className="card card--cta">
            <span className="card__body">
              <h3>¿No sabes cuál necesitas?</h3>
              <p>Llámanos, cuéntanos tu terraza y te orientamos en dos minutos.</p>
              <a className="btn btn--saffron" href={phoneHref}><Icon name="phone" size={18} /> {site.phoneDisplay}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Chooser({ items }: { items: Array<{ situation: string; answer: string; slug: string }> }) {
  return (
    <section className="block block--stone">
      <div className="wrap chooser">
        <SectionHeading index="02" eyebrow="Elige en 10 segundos" title="Si te pasa esto, esto es lo tuyo" description="Una primera orientación. En la visita lo confirmamos con las medidas reales." />
        <ul className="chooser__list">
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={`/${item.slug}/`}>
                <span className="chooser__if">Si… {item.situation.charAt(0).toLowerCase() + item.situation.slice(1)}</span>
                <span className="chooser__then">{item.answer} <Icon name="arrow" size={18} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Steps({ items, index = '03', title = 'De la llamada al toldo montado', description = 'Cuatro pasos, sin letra pequeña.' }: { items: Step[]; index?: string; title?: string; description?: string }) {
  return (
    <section className="block block--teal">
      <div className="wrap">
        <SectionHeading index={index} eyebrow="Cómo trabajamos" title={title} description={description} light />
        <ol className="steps">
          {items.map((item, i) => (
            <li key={item.title}>
              <span className="steps__num">{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Coverage() {
  return (
    <section className="block">
      <div className="wrap coverage">
        <SectionHeading index="04" eyebrow="Zona de trabajo" title="Solo Granollers y Canovelles" description="No hacemos kilómetros por toda la comarca. Trabajamos en dos municipios y los atendemos bien." />
        <div className="coverage__grid">
          <article className="town">
            <p className="town__label">Base</p>
            <h3>Granollers</h3>
            <p>Estamos en {site.address.street}. Desde aquí organizamos todas las visitas, instalaciones y reparaciones.</p>
            <a className="link" href={mapsUrl} target="_blank" rel="noopener">Ver en Google Maps <Icon name="arrow" size={15} /></a>
          </article>
          <article className="town">
            <p className="town__label">También</p>
            <h3>Canovelles</h3>
            <p>Pegado a Granollers y con el mismo servicio: medición gratis, presupuesto por escrito y montaje.</p>
            <Link className="link" href={paths.canovelles}>Toldos en Canovelles <Icon name="arrow" size={15} /></Link>
          </article>
          <article className="town town--info">
            <p><Icon name="clock" size={18} /> {site.hours.label}</p>
            <p><Icon name="phone" size={18} /> <a href={phoneHref}>{site.phoneDisplay}</a></p>
            <p><Icon name="mail" size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><Icon name="pin" size={18} /> {fullAddress}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Faqs({ items, index = '05', title = 'Preguntas sobre toldos en Granollers' }: { items: Faq[]; index?: string; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="block block--stone">
      <div className="wrap faqs">
        <SectionHeading index={index} eyebrow="Dudas frecuentes" title={title} />
        <div className="faqs__list">
          {items.map((item) => (
            <details key={item.question}>
              <summary><span>{item.question}</span><span className="faqs__icon" aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quote({ services, selected = '', title = 'Pide presupuesto de tu toldo en Granollers' }: { services: Array<{ name: string }>; selected?: string; title?: string }) {
  return (
    <section className="quote" id="presupuesto">
      <div className="wrap quote__grid">
        <div className="quote__intro">
          <p className="kicker">Presupuesto gratis</p>
          <h2>{title}</h2>
          <p>Déjanos tu teléfono y qué necesitas. Te llamamos para quedar y pasamos a medir sin compromiso.</p>
          <a className="quote__phone" href={phoneHref}>
            <small>¿Prefieres hablar? Llama de 08:00 a 21:00</small>
            <span><Icon name="phone" size={26} /> {site.phoneDisplay}</span>
          </a>
        </div>
        <ContactForm services={services.map((s) => s.name)} selected={selected} />
      </div>
    </section>
  );
}

export function Banner({ title = '¿Lo medimos esta semana?', text = 'Visita gratis en Granollers y Canovelles. Precio por escrito, sin compromiso.' }: { title?: string; text?: string }) {
  return (
    <section className="banner">
      <div className="wrap banner__row">
        <div><h2>{title}</h2><p>{text}</p></div>
        <div className="actions">
          <a className="btn btn--ink btn--xl" href={phoneHref}><Icon name="phone" size={19} /> {site.phoneDisplay}</a>
          <Link className="btn btn--line btn--xl" href={`${paths.contact}#presupuesto`}>Formulario</Link>
        </div>
      </div>
    </section>
  );
}

export function PageTitle({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="ptitle">
      <div className="wrap ptitle__grid">
        <div><p className="kicker">{kicker}</p><h1>{title}</h1></div>
        {children && <div className="ptitle__aside">{children}</div>}
      </div>
    </header>
  );
}
