# Toldos Granollers Tisec — Next.js 14

```bash
npm install
cp .env.example .env.local   # SMTP (en Plesk: Custom environment variables)
npm run dev
```

## Editar
- Datos del negocio (teléfono, dirección, NIF, zonas): `lib/site.ts`
- Servicios (1 .md = 1 URL en la raíz): `content/servicios/`
- Página Canovelles: `content/zonas/canovelles.md`
- Blog: `content/blog/`
- Textos home: `lib/home.ts`
- Estilos: `app/globals.css`
- Imágenes: `public/images/` (cambiar `image` en cada .md; la del hero en `components/Sections.tsx`)

## Plesk
Application root `/httpdocs` · Document root `/httpdocs/public` · Startup file `server.js` · `npm install` → `npm run build` → Restart App.
