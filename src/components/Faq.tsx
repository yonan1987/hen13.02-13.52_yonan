import { useState } from "react";
import { brand, faqs, whatsappLink } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Pertanyaan umum"
              title={
                <>
                  Masih ada yang <span className="text-gradient">mengganjal?</span>
                </>
              }
              description="Kalau jawaban kamu belum ada di sini, langsung chat kami — dibalas rata-rata 5 menit."
            />

            <Reveal delay={160}>
              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/12 to-transparent p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white">
                  <Glyph name="headset" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-white">Tanya langsung ke tim kami</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  Kami dengan senang hati akan membantu Anda memilih paket dan judul game yang paling cocok
                  untuk konsol Anda.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Button
                    href={whatsappLink("Halo Mikayla_games, saya mau tanya-tanya dulu sebelum pesan.")}
                    variant="whatsapp"
                    size="md"
                    icon={<Glyph name="phone" className="h-4 w-4" />}
                  >
                    Chat WhatsApp
                  </Button>
                  <a
                    href={`tel:${brand.phoneRaw}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 text-[14.5px] font-semibold text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Glyph name="phone" className="h-4 w-4 text-brand-300" />
                    {brand.phoneDisplay}
                  </a>
                </div>
                <p className="mt-4 flex items-center gap-2 text-[12px] text-slate-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {brand.hours}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 70}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-400 ${
                      isOpen
                        ? "border-violet-400/30 bg-white/[0.045]"
                        : "border-white/8 bg-white/[0.02] hover:border-white/15"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      >
                        <span
                          className={`text-[14.5px] font-semibold transition-colors duration-300 sm:text-[15px] ${
                            isOpen ? "text-white" : "text-slate-200"
                          }`}
                        >
                          {item.q}
                        </span>
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-all duration-400 ${
                            isOpen
                              ? "rotate-180 border-violet-400/40 bg-violet-500/20 text-white"
                              : "border-white/10 bg-white/[0.04] text-slate-400"
                          }`}
                        >
                          <Glyph name="chevron" className="h-4 w-4" strokeWidth={2} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      className={`grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[14px] leading-relaxed text-slate-400 sm:px-6 sm:pb-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
