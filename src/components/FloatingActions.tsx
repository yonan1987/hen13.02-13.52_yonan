import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { brand, whatsappLink } from "@/lib/content";
import { Glyph, WhatsAppIcon } from "@/components/ui/Icons";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-300 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className={cn(
          "grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-ink-900/85 text-slate-300 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-500 hover:border-violet-400/40 hover:text-white",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <Glyph name="arrowUp" className="h-5 w-5" />
      </button>

      <a
        href={whatsappLink("Halo Mikayla_games, saya mau tanya jasa isi game PS3/PS4/PS5.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat Mikayla_games di WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-[#052e16] shadow-[0_18px_46px_-14px_rgba(37,211,102,0.85)] transition-transform duration-300 hover:scale-105"
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 [animation-duration:2.6s]"
        />
        <WhatsAppIcon className="relative h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-white/10 bg-ink-900/90 px-3 py-1.5 text-[12px] font-medium text-white opacity-0 shadow-lg backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100 lg:block">
          Chat {brand.phoneDisplay}
        </span>
      </a>
    </div>
  );
}

export function FloatingActions() {
  return (
    <>
      <ScrollProgress />
      <FloatingButtons />
    </>
  );
}
