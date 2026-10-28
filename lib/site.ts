export const site = {
  name: 'Toldos Granollers Tisec',
  brand: 'Tisec',
  legalName: 'Toldos Granollers Tisec',
  /** Obligatorio por LSSI: rellenar antes de publicar */
  nif: '',
  url: 'https://toldosgranollerstisec.es',
  description:
    'Toldos Granollers Tisec instala toldos de brazo, toldos cofre, toldos motorizados y pérgolas bioclimáticas, y repara lonas en Granollers y Canovelles. Trabajamos sobre todo para casas, y también para negocios y empresas.',
  phoneDisplay: '936 944 304',
  phoneE164: '+34936944304',
  email: 'info@toldosgranollerstisec.es',
  address: {
    street: 'Carrer Sant Antoni Maria Claret, 12',
    postalCode: '08402',
    locality: 'Granollers',
    region: 'Barcelona',
    country: 'ES',
  },
  areas: ['Granollers', 'Canovelles'],
  hours: { label: 'Lunes a sábado, de 08:00 a 21:00', short: 'L–S 08:00–21:00', opens: '08:00', closes: '21:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
  priceFrom: 'Desde 100 €',
  languages: 'Català · Castellano · English',
  /** Poner en false si se publica antes de estar lista */
  indexable: true,
};

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.locality}, ${site.address.region}`;
export const phoneHref = `tel:${site.phoneE164}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${fullAddress}`)}`;
export const abs = (path = '/') => new URL(path, site.url).href;

export const paths = {
  home: '/',
  services: '/servicios/',
  service: (slug: string) => `/${slug}/`,
  canovelles: '/toldos-canovelles/',
  about: '/sobre-nosotros/',
  contact: '/contacto/',
  blog: '/blog/',
  post: (slug: string) => `/blog/${slug}/`,
  legal: '/aviso-legal/',
  privacy: '/privacidad/',
  cookies: '/cookies/',
};
