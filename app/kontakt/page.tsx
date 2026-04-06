"use client";

import Link from "next/link";
import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Allgemeine Anfrage",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Später kannst du hier dein echtes Senden ergänzen
    console.log("Gesendet:", formData);

    setSent(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      topic: "Allgemeine Anfrage",
      message: "",
    });
  }

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
                <Link href="/angebote" className="transition hover:text-[#8c6d62]">
                  Angebote
                </Link>
              </li>
            
              <li>
                <Link
                  href="/kontakt"
                  className="border-b-2 border-[#5f473f] pb-1"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="mt-16 rounded-3xl border border-[#eadfd6] bg-[#fffaf4]/95 p-6 shadow-md backdrop-blur-sm md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9a7d71]">
            Blumenzauber
          </p>
          <h2 className="mt-3 font-serif text-4xl italic text-[#5b463e] md:text-6xl">
            Kontakt
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#6a544b]">
            Sie haben Fragen, möchten einen Strauß bestellen oder eine
            florale Dekoration anfragen? Schreiben Sie uns gern über das
            Formular – wir melden uns schnellstmöglich zurück.
          </p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#eadfd6] bg-[#fffaf4]/95 p-6 shadow-md backdrop-blur-sm md:p-8">
            <h3 className="font-serif text-3xl italic text-[#5b463e]">
              Kontaktinformationen
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
                <p className="mt-1">hallo@blumenzauber.de</p>
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

          <div className="rounded-3xl border border-[#eadfd6] bg-[#fffaf4]/95 p-6 shadow-md backdrop-blur-sm md:p-8">
            <h3 className="font-serif text-3xl italic text-[#5b463e]">
              Anfrage senden
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#6a544b]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[#dbcbbf] bg-white px-4 py-3 text-[#5b463e] outline-none transition focus:border-[#b88f7d]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#6a544b]"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[#dbcbbf] bg-white px-4 py-3 text-[#5b463e] outline-none transition focus:border-[#b88f7d]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#6a544b]"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dbcbbf] bg-white px-4 py-3 text-[#5b463e] outline-none transition focus:border-[#b88f7d]"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-[#6a544b]"
                >
                  Worum geht es?
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#dbcbbf] bg-white px-4 py-3 text-[#5b463e] outline-none transition focus:border-[#b88f7d]"
                >
                  <option>Allgemeine Anfrage</option>
                  <option>Blumenstrauß bestellen</option>
                  <option>Hochzeitsfloristik</option>
                  <option>Tisch- & Eventdekoration</option>
                  <option>Trauerfloristik</option>
                  <option>Saisonale Blumen</option>
                  <option>Individuelle Wünsche</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#6a544b]"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-[#dbcbbf] bg-white px-4 py-3 text-[#5b463e] outline-none transition focus:border-[#b88f7d]"
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-[#6f564d] px-6 py-3 text-white transition hover:bg-[#8b7065]"
              >
                Anfrage senden
              </button>

              {sent && (
                <p className="text-sm font-medium text-[#6f564d]">
                  Vielen Dank! Ihre Anfrage wurde gespeichert.
                </p>
              )}
            </form>
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