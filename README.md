# Jax Technology website

The public website for [jax-technology.com](https://jax-technology.com) — Home,
Services and Contact.

Static React site: Vite, React 18, TypeScript, Tailwind, React Router,
Framer Motion. No backend, no database, no API keys. Everything it needs is in
this repository, which means it can be hosted anywhere that serves files.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Type-checks, then builds to `dist/` |
| `npm run typecheck` | TypeScript only |
| `npm run lint` | ESLint |
| `npm run preview` | Serves the built `dist/` locally |

## How pages work

`src/pages.config.ts` maps a name to a component, and the name becomes the URL
— `Services` is served at `/Services`. To add a page, drop a component in
`src/pages/` and add one line there. `src/Layout.tsx` wraps every page with the
header and footer, and `navLinks` at the top of it controls the menu.

## Where things live

```
src/pages/            Home, Services, Contact
src/components/home/  the sections the home page is built from
src/components/product/  reusable product-page blocks (not currently routed)
src/Layout.tsx        header, nav and footer
public/images/        every image the site uses
```

## Things worth knowing

**The contact form opens the visitor's email app.** It does not send anything
by itself — there is no server to send from, and a mail API key cannot live
safely in a static site. Pressing Send builds a message addressed to
`CONTACT_EMAIL` (top of `src/pages/Contact.tsx`) and hands it to the visitor's
mail client. They still have to press send there. Replacing this with a real
sender means changing one function, `handleSubmit`.

**This was converted from a Base44 export.** Base44's SDK, auth wrapper,
database entities and build plugin were removed; the images it hosted were
downloaded into `public/images`. A few comments still mention Base44 where it
explains why code looks the way it does.

**There is no UI component library.** The original export carried 49 generated
shadcn/ui components that nothing imported. They were removed. If you want one
back, `npx shadcn@latest add button` writes it straight into
`src/components/ui` — `components.json` is already configured for TypeScript.
