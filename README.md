# Sve za ugostitelje

Minimalistička web stranica za prodaju proizvoda za ugostiteljstvo.

## Funkcionalnosti

- 🏠 **Početna stranica** sa hero sekcijom
- 📋 **Katalog proizvoda** (PDF pregled)
- 📧 **Newsletter prijava** (Formspree integracija)
- 📱 **Responzivni dizajn**
- ⚡ **Statička generacija** za brze performanse

## Tehnologije

- **Next.js 15** sa App Router
- **TypeScript**
- **Tailwind CSS**
- **Formspree** za newsletter
- **Cloudflare Pages** za hosting

## Lokalno pokretanje

```bash
# Instaliranje dependencija
npm install

# Pokretanje development servera
npm run dev

# Build za produkciju
npm run build

# Pokretanje production servera
npm run start
```

## Deployment na Cloudflare Pages

### Automatski deployment (preporučeno)

1. **Povezivanje GitHub repozitorijuma:**
   - Idite na [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigirajte na Pages
   - Kliknite "Create a project"
   - Odaberite "Connect to Git"
   - Odaberite ovaj repozitorijum

2. **Build konfiguracija:**
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `sve-za-ugostitelje`

3. **Environment variables:**
   - Nisu potrebne za osnovnu funkcionalnost

### Manualni deployment

```bash
# Build aplikacije
npm run build

# Upload 'out' foldera na Cloudflare Pages
```

## Konfiguracija domena

1. U Cloudflare Dashboard, idite na Pages
2. Odaberite svoj projekat
3. Idite na "Custom domains"
4. Dodajte `svezaugostitelje.com`
5. Pratite instrukcije za DNS konfiguraciju

## Newsletter konfiguracija

Newsletter koristi Formspree za besplatno rukovanje formama:

1. Idite na [Formspree.io](https://formspree.io)
2. Kreirajte nalog
3. Kreirajte novi form
4. Zamenite form action URL u `src/app/page.tsx`

Trenutni form endpoint: `https://formspree.io/f/xpwzgkqr`

## Katalog PDF

Zamenite `public/catalogue.pdf` sa vašim stvarnim katalogom proizvoda.

## Customizacija

### Boje
Glavne boje se mogu promeniti u Tailwind konfiguraciji:
- **Primarna:** Orange (orange-600)
- **Sekundarna:** Gray
- **Akcent:** Red za PDF dugme

### Sadržaj
Glavni sadržaj se nalazi u `src/app/page.tsx`:
- Hero tekst
- Features sekcija
- Kontakt informacije

### Meta podaci
SEO i meta podaci se konfigurišu u `src/app/layout.tsx`.

## Struktura projekta

```
sve-za-ugostitelje/
├── src/
│   └── app/
│       ├── page.tsx          # Glavna stranica
│       ├── layout.tsx        # Layout i meta podaci
│       └── globals.css       # Globalni stilovi
├── public/
│   └── catalogue.pdf         # PDF katalog
├── next.config.ts            # Next.js konfiguracija
└── package.json              # Dependencies
```

## Podrška

Za tehničku podršku ili pitanja, kontaktirajte:
- Email: info@svezaugostitelje.com
- Telefon: +381...

## Licenca

© 2024 Sve za ugostitelje. Sva prava zadržana.
