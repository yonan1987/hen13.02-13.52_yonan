import { useRef } from "react";
import { images, marqueeItems, whatsappLink } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const trustAvatars = [
  { initials: "RP", gradient: "from-violet-500 to-indigo-600" },
  { initials: "SN", gradient: "from-cyan-500 to-blue-600" },
  { initials: "BW", gradient: "from-fuchsia-500 to-violet-700" },
  { initials: "AS", gradient: "from-amber-500 to-orange-600" },
];

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", `${(x * 26).toFixed(2)}px`);
    el.style.setProperty("--py", `${(y * 22).toFixed(2)}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0px");
    el.style.setProperty("--py", "0px");
  };

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className="relative">
      {/* glow ring */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(139,92,246,0.35),transparent_70%)] blur-2xl"
      />

      {/* rotating conic glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 animate-spin-slow rounded-[2.4rem] bg-[conic-gradient(from_0deg,transparent_0%,rgba(139,92,246,0.55)_22%,transparent_48%,rgba(34,211,238,0.45)_74%,transparent_100%)] blur-xl"
      />

      {/* main card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-2.5 shadow-[0_40px_120px_-40px_rgba(124,58,237,0.85)] backdrop-blur-2xl">
        <div
          className="relative overflow-hidden rounded-[1.6rem]"
          style={{ transform: "translate3d(calc(var(--px, 0px) * -0.6), calc(var(--py, 0px) * -0.6), 0)" }}
        >
          <img
            src={images.hero}
            alt="Konsol PlayStation 5 dengan controller di atas meja dengan pencahayaan ungu"
            className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px]"
            loading="eager"
            width={1400}
            height={1000}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/20 mix-blend-screen" />

          {/* scan line */}
          <div aria-hidden className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-cyan-300/12 to-transparent" />
        </div>

        {/* console status bar */}
        <div className="flex items-center justify-between gap-3 px-3.5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12px] font-medium text-slate-300">Teknisi online · 4 tersedia</span>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
            Rata-rata 15 mnt
          </span>
        </div>
      </div>

      {/* floating card — install progress */}
      <div
        className="absolute -top-6 left-0 w-[13.5rem] animate-float-slow rounded-2xl border border-white/12 bg-ink-900/85 p-3.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:-left-8"
        style={{ transform: "translate3d(calc(var(--px, 0px) * 1.4), calc(var(--py, 0px) * 1.4), 0)" }}
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
            <Glyph name="check" className="h-4 w-4 text-emerald-950" strokeWidth={2.4} />
          </span>
          <div>
            <p className="text-[12px] font-semibold text-white">Install selesai</p>
            <p className="text-[10.5px] text-slate-400">Elden Ring · v1.12</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" />
        </div>
      </div>

      {/* floating card — rating */}
      <div
        className="absolute right-0 bottom-16 w-44 animate-float-mid rounded-2xl border border-white/12 bg-ink-900/85 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:-right-6"
        style={{ transform: "translate3d(calc(var(--px, 0px) * -1.1), calc(var(--py, 0px) * -1.1), 0)" }}
      >
        <div className="flex gap-0.5 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Glyph key={i} name="star" className="h-3.5 w-3.5" filled strokeWidth={0} />
          ))}
        </div>
        <p className="mt-1.5 font-display text-2xl font-bold text-white">4.9/5</p>
        <p className="text-[10.5px] text-slate-400">1.280 ulasan pelanggan</p>
      </div>

      {/* floating chip — service */}
      <div
        className="absolute -bottom-5 left-6 flex animate-float-slow items-center gap-2 rounded-full border border-white/12 bg-ink-900/85 px-4 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:left-10"
        style={{ animationDelay: "1.2s" }}
      >
        <Glyph name="house" className="h-4 w-4 text-cyan-300" />
        <span className="text-[12px] font-semibold text-white">Panggilan ke rumah</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
          <div className="relative z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pr-4 pl-1.5 text-[12px] font-medium text-slate-300 backdrop-blur-md">
                <span className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                  Promo
                </span>
                Gratis ongkir Jabodetabek · Response 5 menit
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.06] font-extrabold sm:text-5xl lg:text-[3.9rem]">
                Game favoritmu,
                <br />
                <span className="text-gradient">siap 15 menit lagi</span>
                <br />
                <span className="text-slate-300">di rumah kamu.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-slate-400 sm:text-[17px]">
                <span className="font-semibold text-slate-200">Mikayla_games</span> adalah jasa isi game
                PS3, PS4, dan PS5 dengan layanan <span className="text-brand-300">panggilan ke rumah</span>. Kami
                datang, pasang update terbaru, dan menemanimu sampai game benar-benar bisa dimainkan.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={whatsappLink("Halo Mikayla_games, saya mau pesan jasa isi game PS3/PS4/PS5, boleh panggilan ke rumah?")}
                  variant="whatsapp"
                  size="lg"
                  icon={<Glyph name="phone" className="h-4 w-4" />}
                >
                  Pesan via WhatsApp
                </Button>
                <Button href="#layanan" variant="outline" size="lg">
                  Lihat Layanan
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {trustAvatars.map((a) => (
                      <span
                        key={a.initials}
                        className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${a.gradient} text-[11px] font-bold text-white ring-2 ring-ink-950`}
                      >
                        {a.initials}
                      </span>
                    ))}
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[10px] font-bold text-slate-300 ring-2 ring-ink-950">
                      12K+
                    </span>
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-amber-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Glyph key={i} name="star" className="h-3.5 w-3.5" filled strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-0.5 text-[12.5px] text-slate-400">
                      <span className="font-semibold text-white">4.9/5</span> dari 1.280 ulasan
                    </p>
                  </div>
                </div>

                <span className="hidden h-9 w-px bg-white/10 sm:block" />

                <div className="flex flex-wrap items-center gap-2">
                  {["PS3", "PS4", "PS5"].map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11.5px] font-bold tracking-wide text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                  <span className="text-[12px] text-slate-500">+150 judul siap</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={200} className="lg:pl-4">
            <HeroVisual />
          </Reveal>
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-16 lg:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-center text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
            Judul yang paling sering dipesan
          </p>
        </div>
        <div className="mask-fade-x relative flex overflow-hidden">
          <div className="pause-on-hover flex w-max shrink-0 animate-marquee items-center gap-3 pr-3">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[13px] font-medium whitespace-nowrap text-slate-400 backdrop-blur-sm transition-colors hover:border-violet-400/40 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
