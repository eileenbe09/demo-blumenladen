"use client";

import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ece3db] text-[#5b463e]">
      {/* Hintergrund */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/blumenstrauß.png')" }}
      />
      <div className="absolute inset-0 bg-[rgba(255,248,242,0.68)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-8">
        {/* Navbar */}
        <header className="flex flex-col gap-4 rounded-2xl border border-[#eadfd6] bg-[#fffaf4] px-6 py-4 shadow-md md:flex-row md:items-center md:justify-between">
          <h1 className="font-serif text-3xl italic text-[#5f473f]">
            Blumenzauber
          </h1>

          <nav>
            <ul className="flex gap-6 text-[#5f473f]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/angebote">Angebote</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </header>

        {/* Inhalt */}
        <section className="mt-12 rounded-3xl bg-[#fffaf4]/90 p-8 shadow-md backdrop-blur-sm">
          <h1 className="font-serif text-4xl italic">Impressum</h1>

          <p className="mt-6">
            <strong>Demo-Projekt – Blumenladen Website</strong>
          </p>

          <h2 className="mt-6 font-semibold">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            Eileen Partus<br />
            Hohenkamp 9<br />
            46284 Dorsten
          </p>

          <h2 className="mt-6 font-semibold">Kontakt</h2>
          <p className="mt-2">
            E-Mail: ei.beke@web.de<br />
          </p>

          {/* WICHTIG: Demo-Hinweis */}
          <h2 className="mt-6 font-semibold">Hinweis</h2>
          <p className="mt-2">
            Diese Website ist eine unverbindliche Demo-Seite und dient
            ausschließlich zu Präsentationszwecken im Rahmen eines
            Webdesign-Portfolios.
          </p>

          <p className="mt-2">
            Es handelt sich nicht um ein reales Unternehmen. Alle Inhalte,
            Namen, Adressen und Kontaktdaten sind frei erfunden oder dienen
            als Platzhalter.
          </p>

          <p className="mt-2">
            Das dargestellte Kontaktformular ist nicht aktiv und dient
            ausschließlich der Veranschaulichung.
          </p>

          <p className="mt-6 text-sm text-[#8c6d62]">
  Konzeption & Design: Eileen Partus | Partus Webdesign
</p>
        </section>
      </div>
    </main>
  );
}