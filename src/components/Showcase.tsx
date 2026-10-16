import { useState } from "react";
import { consoles, whatsappLink } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { ConsoleArt } from "@/components/art/ConsoleArt";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GameCover } from "@/components/ui/GameCover";

const rupiah = (value: number) => "Rp" + value.toLocaleString("id-ID");

export function Showcase() {
  const [activeKey, setActiveKey] = useState(consoles[1].key);
  const active = consoles.find((c) => c.key === activeKey) ?? consoles[1];

  return (
    <section id="konsol" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.10),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Katalog konsol"
          title={
            <>
              Satu layanan, <span className="text-gradient">tiga generasi konsol</span>
            </>
          }
          description="Pilih konsol yang kamu pakai. Kami punya file, lisensi, dan teknisi yang paham tiap platformnya."
        />

        {/* tabs */}
        <Reveal delay={120}>
            <div
              role="tablist"
              aria-label="Pilih konsol"
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                event.preventDefault();
                const index = consoles.findIndex((c) => c.key === activeKey);
                const next =
                  event.key === "ArrowRight"
                    ? (index + 1) % consoles.length
                    : (index - 1 + consoles.length) % consoles.length;
                setActiveKey(consoles[next].key);
              }}
              className="mx-auto mt-12 flex w-full max-w-lg items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl"
            >
            {consoles.map((c) => {
              const selected = c.key === activeKey;
              return (
                <button
                  key={c.key}
                  role="tab"
                  id={`tab-${c.key}`}
                  aria-selected={selected}
                  aria-controls={`panel-${c.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveKey(c.key)}
                  className={`relative flex-1 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-400 sm:text-sm ${
                    selected
                      ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_10px_28px_-12px_rgba(139,92,246,0.9)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {c.name.replace("PlayStation ", "PS")}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* panel */}
        <div
          key={active.key}
          id={`panel-${active.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.key}`}
          className="tab-enter mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_65%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02]">
              <ConsoleArt variant={active.key} className="aspect-[16/10] w-full sm:aspect-[16/9]" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-200 uppercase">
                    {active.sub}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-white">{active.headline}</h3>
                </div>
                <span className="rounded-full border border-white/15 bg-ink-950/70 px-3 py-1.5 text-[11.5px] font-semibold text-slate-200 backdrop-blur-xl">
                  ~{active.eta}
                </span>
              </div>
            </div>

            <p className="mt-6 text-[14.5px] leading-relaxed text-slate-400">{active.desc}</p>

            <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {active.specs.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3 transition-colors duration-300 hover:border-violet-400/25"
                >
                  <dt className="text-[10.5px] font-medium tracking-[0.12em] text-slate-500 uppercase">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-[13px] font-semibold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div>
                <p className="text-[11px] tracking-[0.14em] text-slate-500 uppercase">Mulai dari</p>
                <p className="font-display text-2xl font-extrabold text-white">
                  {rupiah(active.from)}
                  <span className="ml-1 text-[12px] font-medium text-slate-500">/ game</span>
                </p>
              </div>
              <Button
                href={whatsappLink(`Halo Mikayla_games, saya mau tanya paket ${active.name}.`)}
                variant="primary"
                size="md"
                icon={<Glyph name="controller" className="h-4 w-4" />}
              >
                Tanya {active.name.replace("PlayStation ", "PS")}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-white">Judul populer</h3>
              <p className="text-[12.5px] text-slate-500">+150 judul lain tersedia</p>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2.5 sm:gap-3">
              {active.games.map((game, i) => (
                <Reveal key={`${active.key}-${game.title}`} delay={i * 55} variant="scale">
                  <GameCover item={game} />
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <Glyph name="update" className="h-5 w-5 shrink-0 text-cyan-300" />
              <p className="text-[13px] text-slate-400">
                Semua judul dipasang pada <span className="font-semibold text-white">versi update terbaru</span>{" "}
                beserta DLC — langsung bisa online bareng teman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
