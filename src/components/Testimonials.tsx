import { testimonials } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Testimonials() {
  return (
    <section id="testimoni" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute right-0 top-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.12),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kata mereka"
          title={
            <>
              1.280 pelanggan, <span className="text-gradient">satu cerita yang sama</span>
            </>
          }
          description="Ulasan asli dari gamer yang memakai layanan Mikayla_games — dari anak SMP sampai kolektor PS3 yang paling teliti."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-6" glow="rgba(168,85,247,0.15)">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-0.5 text-amber-300">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Glyph key={s} name="star" className="h-4 w-4" filled strokeWidth={0} />
                    ))}
                  </div>
                  <Glyph
                    name="quote"
                    className="h-7 w-7 text-white/8 transition-colors duration-500 group-hover:text-violet-300/30"
                  />
                </div>

                <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-slate-300">{t.text}</p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${t.gradient} text-[13px] font-bold text-white shadow-lg`}
                  >
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-white">{t.name}</p>
                    <p className="truncate text-[12px] text-slate-500">
                      {t.role} · {t.city}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-7 py-7 backdrop-blur-xl sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {testimonials.slice(0, 4).map((t) => (
                  <span
                    key={t.name}
                    className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.gradient} text-[11px] font-bold text-white ring-2 ring-ink-950`}
                  >
                    {t.initials}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[14.5px] font-semibold text-white">4.9 dari 5</p>
                <p className="text-[12.5px] text-slate-500">98% merekomendasikan Mikayla_games ke teman</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Glyph key={s} name="star" className="h-5 w-5 text-amber-300" filled strokeWidth={0} />
                ))}
              </div>
              <span className="text-[12.5px] text-slate-500">Google Reviews</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
