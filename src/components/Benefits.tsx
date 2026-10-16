import { benefits, images } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { ChatMockup } from "@/components/art/ChatMockup";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Benefits() {
  return (
    <section id="keunggulan" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kenapa bother pilih kami"
          title={
            <>
              Dari chat sampai main, <span className="text-gradient">cuma beberapa langkah</span>
            </>
          }
          description="Kami menghapus bagian yang paling melelahkan dari proses installing game — supaya kamu fokus Steelers di game, bukan di teknis."
        />

        <div className="mt-16 space-y-20 sm:space-y-28">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${b.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Reveal variant={b.reverse ? "right" : "left"} delay={60}>
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_68%)] blur-2xl"
                  />
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
                    {b.visual === "chat" ? (
                      <div className="flex min-h-[23rem] items-center justify-center bg-[radial-gradient(70%_60%_at_50%_38%,rgba(34,211,238,0.12),transparent_70%)] px-4 pt-6 pb-24 sm:min-h-[27rem]">
                        <ChatMockup />
                      </div>
                    ) : (
                      <img
                        src={b.visual === "install" ? images.install : images.delivery}
                        alt={b.title}
                        className="h-64 w-full object-cover transition-transform duration-[1.4s] hover:scale-105 sm:h-80 lg:h-[24rem]"
                        loading="lazy"
                      />
                    )}
                    {b.visual === "chat" ? null : (
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/12 bg-ink-950/65 px-4 py-3 backdrop-blur-xl">
                      <span className="font-display text-2xl font-extrabold text-gradient-brand">{b.stat.value}</span>
                      <span className="text-[12px] leading-snug text-slate-300">{b.stat.label}</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal variant={b.reverse ? "left" : "right"} delay={140}>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-200 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                    {b.eyebrow}
                  </span>
                  <h3 className="mt-5 text-2xl leading-tight font-bold text-white sm:text-[1.9rem]">{b.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-400">{b.desc}</p>

                  <ul className="mt-7 space-y-3.5">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gradient-to-br from-violet-500 to-cyan-400">
                          <Glyph name="check" className="h-3 w-3 text-white" strokeWidth={2.6} />
                        </span>
                        <span className="text-[14px] text-slate-300">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
