import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Sve za ugostitelje
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link
                  href="#home"
                  className="text-slate-700 hover:text-amber-600 font-medium transition-colors"
                >
                  Početna
                </Link>
                <Link
                  href="#catalogue"
                  className="text-slate-600 hover:text-amber-600 font-medium transition-colors"
                >
                  Katalog
                </Link>
                <Link
                  href="#newsletter"
                  className="text-slate-600 hover:text-amber-600 font-medium transition-colors"
                >
                  Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/40 pt-20 pb-32"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Vaš pouzdani partner u ugostiteljstvu
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 bg-clip-text text-transparent mb-8 leading-tight">
              Sve za ugostitelje
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Od profesionalnih menija do vrhunske opreme - pružamo kompletna
              rešenja za uspešno poslovanje u ugostiteljstvu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="#catalogue"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="flex items-center">
                  Pogledajte katalog
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="#newsletter"
                className="border-2 border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-600 px-10 py-4 rounded-2xl text-lg font-semibold transition-all hover:bg-white"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Zašto odabrati nas?
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Godinama iskustva u ugostiteljstvu i duboko razumevanje potreba
              naših klijenata
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-amber-50/30 hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                Kvalitet
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                Samo najbolji proizvodi od proverenih dobavljača sa
                dugogodišnjom tradicijom
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-amber-50/30 hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Brzina</h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                Brza dostava i efikasna usluga prilagođena vašim potrebama
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-amber-50/30 hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                Podrška
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                Stručna podrška i savetovanje tokom celog procesa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue CTA Section */}
      <section
        id="catalogue"
        className="py-24 bg-gradient-to-br from-slate-100 to-amber-50/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Kompletan katalog proizvoda
            </h3>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Pregledajte naš sveobuhvatan katalog sa svim proizvodima za
              ugostiteljstvo. Od profesionalnih menija do najsavremenije
              kuhinjske opreme.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200/60">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  PDF Katalog
                </h4>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Preuzmite ili pregledajte naš kompletni katalog proizvoda sa
                  detaljnim specifikacijama
                </p>
                <a
                  href="/catalogue.pdf"
                  target="_blank"
                  className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Otvori katalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="py-24 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Budite u toku sa novostima
          </h3>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Prijavite se za naš newsletter i budite prvi koji će saznati o novim
            proizvodima, specijalnim ponudama i korisnim savetima za
            ugostiteljstvo.
          </p>

          <div className="max-w-md mx-auto">
            <form
              action="https://formspree.io/f/xpwzgkqr"
              method="POST"
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Vaša email adresa"
                  className="flex-1 px-6 py-4 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-colors shadow-lg"
                >
                  Prijavite se
                </button>
              </div>
              <input
                type="hidden"
                name="_subject"
                value="Nova prijava za newsletter - Sve za ugostitelje"
              />
              <input
                type="hidden"
                name="_next"
                value="https://svezaugostitelje.com/#newsletter"
              />
            </form>
            <p className="text-white/80 text-sm mt-6">
              Poštujemo vašu privatnost. Možete se odjaviti u bilo kom trenutku.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h4 className="text-3xl font-bold">Sve za ugostitelje</h4>
            </div>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Vaš pouzdani partner u ugostiteljstvu sa dugogodišnjim iskustvom i
              stručnošću
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="mailto:info@svezaugostitelje.com"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="tel:+381"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Telefon
              </a>
            </div>
            <div className="pt-8 border-t border-slate-800 text-slate-500">
              © 2024 Sve za ugostitelje. Sva prava zadržana.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
