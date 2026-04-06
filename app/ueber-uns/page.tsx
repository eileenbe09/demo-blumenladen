"use client";

import Image from "next/image";
import Link from "next/link";

export default function UeberUnsPage() {
  return (
      <main className="relative min-h-screen overflow-hidden bg-[#ece3db] text-[#5b463e]">
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/Blumenstrauss.png')" }}
/>

<div className="absolute inset-0 bg-[rgba(255,248,242,0.68)]" />

<div className="absolute inset-0 backdrop-blur-[1px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
        <header className="flex flex-col gap-4 rounded-2xl border border-[#eadfd6] bg-[#fffaf4] px-6 py-4 shadow-md md:flex-row md:items-center md:justify-between">
          <h1 className="font-serif text-4xl italic tracking-wide text-[#5f473f] md:text-3xl">
            Blumenzauber
          </h1>

          <nav>
            <ul className="flex flex-wrap gap-6 text-base font-medium text-[#5f473f] md:gap-10 md:text-lg">
              <li>
                <Link href="/" className="transition hover:text-[#8c6d62]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="border-b-2 border-[#5f473f] pb-1"
                >
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

      <section className="mt-10 grid gap-10 rounded-3xl border border-[#eadfd6] bg-[#fffaf4] p-8 lg:grid-cols-2 lg:items-center">
  <div>
    <p className="text-sm uppercase tracking-[0.3em] text-[#9a7d71]">
      Blumenzauber
    </p>
    <h1 className="mt-7 font-serif text-4xl italic md:text-6xl text-[#5b463e]">
      Über uns
    </h1>
    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#6a544b]">
      Bei Blumenzauber dreht sich alles um natürliche Schönheit, saisonale
      Blumen und mit Liebe gestaltete Arrangements. Ob kleiner Gruß,
      festlicher Strauß oder florale Dekoration – wir möchten Blumen
      schaffen, die Freude machen und in Erinnerung bleiben.
    </p>
  </div>

  <div className="relative h-[280px] overflow-hidden rounded-3xl md:h-[380px]">
    <Image
      src="/blumenladen.png"
      alt="Blumenladen Blumenzauber"
      fill
      className="object-cover"
    />
  </div>
</section>
        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#eadfd6] bg-[#fffaf4] p-6 shadow-md md:p-8">
            <h3 className="font-serif text-3xl italic text-[#5b463e]">
              Kontakt & Öffnungszeiten
            </h3>

            <div className="mt-6 space-y-5 text-[#6a544b]">
              <div>
                <h4 className="text-lg font-semibold text-[#5b463e]">Adresse</h4>
                <p className="mt-1 leading-relaxed">
                  Blumenzauber
                  <br />
                  Rosenstraße 12
                  <br />
                  12345 Blumenstadt
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#5b463e]">Telefon</h4>
                <p className="mt-1">0123 4567890</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#5b463e]">E-Mail</h4>
                <p className="mt-1">
                  <a
                    href="mailto:hallo@blumenzauber.de"
                    className="transition hover:text-[#8c6d62]"
                  >
                    hallo@blumenzauber.de
                  </a>
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#5b463e]">
                  Öffnungszeiten
                </h4>
                <div className="mt-2 space-y-1">
                  <p>Montag – Freitag: 09:00 – 18:00 Uhr</p>
                  <p>Samstag: 09:00 – 13:00 Uhr</p>
                  <p>Sonntag: geschlossen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#eadfd6] bg-[#fffaf4] p-6 shadow-md md:p-8">
            <h3 className="font-serif text-3xl italic text-[#5b463e]">
              Was uns ausmacht
            </h3>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-[#f8efe8] p-5">
                <h4 className="text-lg font-semibold">Saisonale Blumen</h4>
                <p className="mt-2 leading-relaxed text-[#6a544b]">
                  Wir arbeiten bevorzugt mit saisonalen Blumen und stellen
                  Sträuße zusammen, die zur Jahreszeit passen und besonders
                  natürlich wirken.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8efe8] p-5">
                <h4 className="text-lg font-semibold">Mit Liebe gebunden</h4>
                <p className="mt-2 leading-relaxed text-[#6a544b]">
                  Jeder Strauß wird mit viel Sorgfalt gestaltet – individuell,
                  harmonisch und mit Blick für Farben, Formen und feine
                  Details.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8efe8] p-5">
                <h4 className="text-lg font-semibold">Persönliche Beratung</h4>
                <p className="mt-2 leading-relaxed text-[#6a544b]">
                  Ob Geschenk, Hochzeit, Geburtstag oder einfach eine kleine
                  Freude zwischendurch – wir nehmen uns Zeit für die passende
                  florale Idee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-[#6a544b]">
  <Link href="/impressum" className="hover:underline">
    Impressum
  </Link>
</footer>
      </div>
    </main>
  );
}