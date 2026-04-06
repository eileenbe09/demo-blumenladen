"use client";

import Link from "next/link";

export default function BlumenladenHomepage() { const seasonalFlowers =
   [ { name: "Tulpen", image: "/tulpen1.png" },
   { name: "Magnolien", image: "/magnolien 1.png" },
    { name: "Pfingstrosen", image: "/pfingstrosen1.png" },
     { name: "Ranunkeln", image: "/ranunkeln1.png" },
      { name: "Bartnelken", image: "/bartnelken1.png" },
      { name: "Rosen", image: "/rosen1.png" }, ];

return ( <main className="relative min-h-screen overflow-hidden bg-[#ece3db] text-white"> 
<div className="absolute inset-0 bg-cover bg-center" 
style={{ backgroundImage: "url('/blumenstrauss.png')" }} />

<div className="absolute inset-0 bg-[rgba(255,248,242,0.68)]" />
  <div className="absolute inset-0 backdrop-blur-[1px]" />

  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-14">
    <header className="flex flex-col gap-4 rounded-2xl border border-[#eadfd6] bg-[#fffaf4] px-6 py-4 shadow-md md:flex-row md:items-center md:justify-between">
      <h1 className="font-serif text-4xl italic tracking-wide text-[#5f473f] md:text-3xl">
        Blumenzauber
      </h1>

      <nav>
        <ul className="flex flex-wrap gap-6 text-base font-medium text-[#5f473f] md:gap-10 md:text-lg">
          <li>
            <Link href="/" className="border-b-2 border-[#5f473f] pb-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="/ueber-uns" className="transition hover:text-[#8c6d62]">
              Über uns
            </Link>
          </li>
          <li>
            <Link href="/angebote" className="transition hover:text-[#8c6d62]">
              Angebote
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="transition hover:text-[#8c6d62]">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <section className="flex flex-1 flex-col items-center justify-center py-12 text-center md:py-20">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#6a5148] md:text-base">
        Frisch · Saisonal · Mit Liebe gebunden
      </p>

      <h2 className="max-w-4xl font-serif text-5xl italic leading-tight text-[#4f3932] drop-shadow-sm md:text-7xl">
        Aktuell in der Saison
      </h2>

      <p className="mt-6 max-w-2xl text-lg font-medium text-[#5c4740] md:text-2xl">
        Entdecken Sie unsere Blumen der Saison und lassen Sie sich von
        natürlichen Farben, zarten Blüten und frischen Arrangements
        inspirieren.
      </p>

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {seasonalFlowers.map((flower) => (
          <article
            key={flower.name}
            className="group relative overflow-hidden rounded-2xl border border-[#8a756a]/20 bg-white/45 shadow-2xl backdrop-blur-sm"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(255,250,245,0.96),rgba(255,250,245,0.82),transparent)] p-5 text-center">
              <h3 className="text-3xl font-semibold text-[#4e3932]">
                {flower.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>

<footer className="mt-16 rounded-2xl border border-[#eadfd6] bg-[#fffaf4] px-6 py-5 shadow-md">
  <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
    <p className="text-sm text-[#6b544b]">
      © 2026 Blumenzauber. Alle Rechte vorbehalten.
    </p>

    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#6b544b]">
      <Link href="/datenschutz" className="transition hover:text-[#8c6d62]">
        Datenschutz
      </Link>
      <span className="text-[#c9b8ab]">|</span>
      <Link href="/impressum" className="transition hover:text-[#8c6d62]">
        Impressum
      </Link>
    </div>
  </div>
</footer>
  </div>

</main>

); }