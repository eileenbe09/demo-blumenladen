"use client";

import { useState } from "react";
import Link from "next/link";

export default function AngebotePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const angebote = [
    {
      title: "Sträuße für jeden Anlass",
      text: "Ob Geburtstag, Jubiläum, Dankeschön oder einfach eine kleine Aufmerksamkeit – wir gestalten liebevoll gebundene Sträuße für jeden Moment.",
      images: ["/angebot-strauss-1.jpg", "/angebot-strauss-2.jpg", "/angebot-strauss-3.jpg"],
    },
    {
      title: "Hochzeitsfloristik",
      text: "Von Brautstrauß über Anstecker bis hin zur Tischdekoration begleiten wir euren besonderen Tag mit harmonisch abgestimmten Blumenarrangements.",
      images: ["/angebot-hochzeit-1.jpg", "/angebot-hochzeit-2.png", "/angebot-hochzeit-3.png"],
    },
    {
      title: "Tisch- & Eventdekoration",
      text: "Für Feiern, Firmenveranstaltungen und besondere Anlässe gestalten wir florale Dekorationen, die Räume stilvoll und einladend wirken lassen.",
      images: ["/angebot-event-1.png", "/angebot-event-2.jpg", "/angebot-event-3.webp"],
    },
    {
      title: "Trauerfloristik",
      text: "Mit viel Feingefühl fertigen wir Kränze, Gestecke und Blumenarrangements für einen persönlichen und würdevollen Abschied.",
      images: ["/angebot-trauer-1.jpg", "/angebot-trauer-2.jpg", "/angebot-trauer-3.jpg"],
    },
    {
      title: "Saisonale Blumen",
      text: "Wir arbeiten bevorzugt mit saisonalen Blumen und stellen natürliche Arrangements zusammen, die die jeweilige Jahreszeit widerspiegeln.",
      images: [],
    },
    {
      title: "Individuelle Wünsche",
      text: "Gerne setzen wir persönliche Vorstellungen um und beraten individuell zu Farben, Stilrichtungen und passenden Blumen für jeden Anlass.",
      images: [],
    },
  ];

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
          <h1 className="font-serif text-3xl italic tracking-wide text-[#5f473f]">
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
                <Link href="/ueber-uns" className="transition hover:text-[#8c6d62]">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/angebote" className="border-b-2 border-[#5f473f] pb-1">
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

        <section className="mt-10 rounded-3xl border border-[#eadfd6] bg-[#fffaf4] px-6 py-10 shadow-md md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9a7d71]">
            Blumenzauber
          </p>
          <h2 className="mt-3 font-serif text-4xl italic text-[#5b463e] md:text-6xl">
            Unsere Angebote
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#6a544b]">
            Mit Liebe zum Detail gestalten wir florale Arrangements für viele
            verschiedene Anlässe.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {angebote.map((angebot) => (
            <article
              key={angebot.title}
              className="rounded-3xl border border-[#eadfd6] bg-[#fffaf4] p-6 shadow-md"
            >
              <h3 className="font-serif text-3xl italic text-[#5b463e]">
                {angebot.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#6a544b]">
                {angebot.text}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {angebot.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className="overflow-hidden rounded-2xl border border-[#eadfd6] bg-[#f8efe8]"
                  >
                    <img
                      src={image}
                      alt={`${angebot.title} Beispiel ${index + 1}`}
                      className="h-24 w-full cursor-pointer object-contain bg-[#f8efe8] p-1 transition hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </article>
          ))}
          
        </section>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-1 text-sm font-medium text-[#5b463e] shadow-md"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Große Ansicht"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </div>

        
        </div>
      )}

    <section className="mt-12 rounded-3xl border border-[#eadfd6] bg-[#fffaf4]/95 p-6 shadow-md backdrop-blur-sm md:p-8">
  <div className="max-w-3xl">
    <h3 className="font-serif text-3xl italic text-[#5b463e]">
      Weitere Leistungen
    </h3>
    <p className="mt-3 leading-relaxed text-[#6a544b]">
      Neben unseren floralen Arrangements bieten wir viele weitere Leistungen
      rund um Blumen, Pflanzen und liebevoll gestaltete Geschenkideen an.
    </p>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl bg-[#f8efe8] p-5">
      <h4 className="font-serif text-2xl italic text-[#5b463e]">
        Blumen & Pflanzen
      </h4>
      <ul className="mt-4 space-y-3 text-[#6a544b]">
        <li>• Frische Schnittblumen und Topfpflanzen</li>
        <li>• Große Auswahl an Saisonbepflanzungen</li>
        <li className="ml-5">– Zwiebelblüher und Frühlingsblüher</li>
        <li className="ml-5">– Sommerblumen</li>
        <li className="ml-5">– Herbst- und Winterbepflanzung</li>
        <li>• Balkonbepflanzungen</li>
      </ul>
    </div>

    <div className="rounded-2xl bg-[#f8efe8] p-5">
      <h4 className="font-serif text-2xl italic text-[#5b463e]">
        Service & Besondere Wünsche
      </h4>
      <ul className="mt-4 space-y-3 text-[#6a544b]">
        <li>• Blumenarrangements zu jedem Anlass</li>
        <li>• Originelle Geschenkideen</li>
        <li>• Lieferservice</li>
        <li>• Grabpflege und Grabbepflanzung</li>
        <li>• Gutscheine floral verpackt</li>
        <li>• Geldgeschenke individuell verpackt</li>
        <li>• Persönliche Beratung für individuelle Wünsche</li>
      </ul>
    </div>
  </div>
  <footer className="mt-12 text-center text-sm text-[#6a544b]">
  <Link href="/impressum" className="hover:underline">
    Impressum
  </Link>
</footer>
</section>
    </main>
  );
}