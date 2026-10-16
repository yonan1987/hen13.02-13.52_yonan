import { brand, navLinks, whatsappLink } from "@/lib/content";
import { Glyph, InstagramIcon, TikTokIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui/Icons";

const socials = [
  { name: "WhatsApp", href: whatsappLink("Halo Mikayla_games!"), icon: <WhatsAppIcon className="h-4 w-4" /> },
  { name: "Instagram", href: "#", icon: <InstagramIcon className="h-4 w-4" /> },
  { name: "TikTok", href: "#", icon: <TikTokIcon className="h-4 w-4" /> },
  { name: "YouTube", href: "#", icon: <YouTubeIcon className="h-4 w-4" /> },
];

const columns = [
  {
    title: "Layanan",
    links: [
      { label: "Isi Game PS3", href: "#konsol" },
      { label: "Isi Game PS4", href: "#konsol" },
      { label: "Isi Game PS5", href: "#konsol" },
      { label: "Panggilan ke Rumah", href: "#layanan" },
      { label: "Update Game", href: "#layanan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#keunggulan" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "Harga", href: "#harga" },
      { label: "FAQ", href: "#faq" },
      { label: "Karier", href: "#" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Hubungi Kami", href: `#faq` },
      { label: "Garansi Layanan", href: "#faq" },
      { label: "Cara Pesan", href: "#layanan" },
      { label: "Status Teknisi", href: "#top" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950/60 pt-16 pb-10">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.14),transparent_68%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label={`${brand.name} beranda`}>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-violet-600 to-cyan-400 shadow-[0_10px_28px_-10px_rgba(139,92,246,0.9)]">
                <Glyph name="controller" className="h-5 w-5 text-white" strokeWidth={1.7} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[17px] font-bold tracking-tight text-white">
                  Mikayla<span className="text-brand-300">_games</span>
                </span>
                <span className="mt-0.5 block text-[10px] font-medium tracking-[0.18em] text-slate-500 uppercase">
                  {brand.tagline}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-slate-500">
              Layanan isi game PS3, PS4, dan PS5 dengan panggilan ke rumah. Aman, cepat, dan bergaransi — sejak
              2019.
            </p>
            <ul className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[12px] font-semibold tracking-[0.18em] text-white uppercase">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[13.5px] text-slate-500 transition-colors duration-300 hover:text-white"
                    >
                      <span className="h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[12px] font-semibold tracking-[0.18em] text-white uppercase">Hubungi Kami</h3>
            <ul className="mt-5 space-y-4 text-[13.5px] text-slate-500">
              <li>
                <a
                  href={`tel:${brand.phoneRaw}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Glyph name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span>
                    {brand.phoneDisplay}
                    <span className="mt-0.5 block text-[11.5px] text-slate-600">{brand.hours}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-3 transition-colors hover:text-white">
                  <Glyph name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Glyph name="map" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {brand.address}
                  <span className="mt-0.5 block text-[11.5px] text-slate-600">{brand.serviceArea}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-[12.5px] text-slate-600">
            © {new Date().getFullYear()} {brand.name}. Semua hak dilindungi.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.slice(0, 4).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[12.5px] text-slate-600 transition-colors hover:text-slate-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[12.5px] text-slate-600">
            Dibuat dengan <span className="text-rose-400">♥</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
