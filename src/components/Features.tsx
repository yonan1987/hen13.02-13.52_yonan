import { features, type IconName } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { RouteVisual } from "@/components/art/RouteVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const steps = [
  { n: "01", title: "Chat & konfirmasi", desc: "Kirim judul game, lokasi, dan jadwal lewat WhatsApp." },
  { n: "02", title: "Teknisi meluncur", desc: "Rata-rata 15 menit, game sudah siap di tas teknisi." },
  { n: "03", title: "Instalasi & tes", desc: "Game dipasang, diuji, lalu Anda langsung bisa main." },
];

function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: IconName;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <SpotlightCard className="h-full p-6" glow="rgba(34,211,238,0.16)">
        <div className="flex h-full flex-col">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-transparent text-brand-200 transition-all duration-500 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:text-white">
            <Glyph name={icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-[17px] font-semibold text-white">{title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{desc}</p>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function Features() {
  const [headline, ...rest] = features;

  return (
    <section id="layanan" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kenapa Mikayla_games"
          title={
            <>
              Semua yang kamu butuh, <span className="text-gradient">dalam satu layanan</span>
            </>
          }
          description="Bukan sekadar jual file game. Kami menangani instalasi, update, keamanan, sampai game benar-benar berjalan di konsol kamu."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* flagship card */}
          <Reveal className="lg:col-span-2" variant="scale">
            <SpotlightCard className="h-full p-7 sm:p-9" glow="rgba(139,92,246,0.22)">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-brand-200 uppercase">
                    <Glyph name="sparkles" className="h-3.5 w-3.5" />
                    {headline.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-white sm:text-[1.75rem]">{headline.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">{headline.desc}</p>

                  <ol className="mt-7 space-y-4">
                    {steps.map((s) => (
                      <li key={s.n} className="group/step flex gap-4">
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-display text-[12px] font-bold text-brand-200 transition-all duration-500 group-hover/step:border-violet-400/50 group-hover/step:bg-violet-500/15 group-hover/step:text-white">
                          {s.n}
                        </span>
                        <div>
                          <p className="text-[14.5px] font-semibold text-white">{s.title}</p>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-slate-500">{s.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),transparent_65%)] blur-2xl"
                  />
                  <RouteVisual className="h-56 w-full sm:h-72" />
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {rest.slice(0, 2).map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} delay={i * 100} />
          ))}

          {rest.slice(2).map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
