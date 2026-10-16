import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { brand, navLinks, whatsappLink } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label={`${brand.name} beranda`}>
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-violet-600 to-cyan-400 shadow-[0_10px_28px_-10px_rgba(139,92,246,0.9)] transition-transform duration-500 group-hover:scale-105">
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
        <Glyph name="controller" className="relative h-5 w-5 text-white" strokeWidth={1.7} />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[17px] font-bold tracking-tight text-white">
          Mikayla<span className="text-brand-300">_games</span>
        </span>
        <span className="mt-0.5 block text-[10px] font-medium tracking-[0.18em] text-slate-500 uppercase">
          Isi Game · Panggilan ke Rumah
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/60"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                active === link.href ? "text-white" : "text-slate-400 hover:text-white",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-violet-400 to-cyan-300 transition-transform duration-400",
                  active === link.href ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${brand.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-white/25 hover:text-white xl:inline-flex"
          >
            <Glyph name="phone" className="h-4 w-4 text-brand-300" />
            {brand.phoneDisplay}
          </a>
          <Button
            href={whatsappLink("Halo Mikayla_games, saya mau pesan jasa isi game PS3/PS4/PS5.")}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Pesan Sekarang
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.09] lg:hidden"
          >
            <Glyph name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Navigasi seluler" className="flex flex-col gap-1 px-4 py-5 sm:px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-white"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
              <Glyph name="chevronRight" className="h-4 w-4 text-slate-600" />
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-4">
            <Button
              href={whatsappLink("Halo Mikayla_games, saya mau pesan jasa isi game PS3/PS4/PS5.")}
              variant="whatsapp"
              size="md"
              className="w-full"
            >
              Chat WhatsApp
            </Button>
            <a
              href={`tel:${brand.phoneRaw}`}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30"
            >
              <Glyph name="phone" className="h-4 w-4 text-brand-300" />
              {brand.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
