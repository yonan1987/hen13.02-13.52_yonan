import { stats } from "@/lib/content";
import { useCountUp } from "@/hooks/useCountUp";
import { Glyph } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

function Stat({
  value,
  suffix,
  label,
  hint,
  decimals = 0,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  hint: string;
  decimals?: number;
  delay: number;
}) {
  const { ref, value: current } = useCountUp(value, 1800, decimals);

  return (
    <Reveal delay={delay} className="group relative bg-ink-950">
      <div className="relative h-full px-6 py-8 transition-colors duration-500 group-hover:bg-white/[0.02] sm:px-7">
        <div className="font-display text-[2.1rem] leading-none font-extrabold text-white sm:text-[2.4rem]">
          <span ref={ref}>
            {decimals > 0 ? current.toFixed(decimals) : current.toLocaleString("id-ID")}
          </span>
          <span className="text-gradient-brand">{suffix}</span>
        </div>
        <p className="mt-2.5 text-sm font-semibold text-slate-200">{label}</p>
        <p className="mt-1 text-[12.5px] text-slate-500">{hint}</p>
        <div
          aria-hidden
          className="mt-4 h-px w-10 bg-gradient-to-r from-violet-400 to-cyan-300 opacity-60 transition-all duration-500 group-hover:w-20"
        />
      </div>
    </Reveal>
  );
}

const badges = [
  { icon: "shield" as const, label: "Garansi 30 hari" },
  { icon: "controller" as const, label: "Teknisi terlatih" },
  { icon: "wallet" as const, label: "Bayar setelah selesai" },
  { icon: "headset" as const, label: "Support 24/7" },
];

export function SocialProof() {
  return (
    <section aria-label="Bukti sosial" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-[12px] font-medium tracking-[0.18em] text-slate-500 uppercase">
            Dipercaya oleh <span className="text-slate-300">12.400+ gamer</span> di seluruh Indonesia
          </p>
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              hint={s.hint}
              decimals={s.value % 1 !== 0 ? 1 : 0}
              delay={i * 110}
            />
          ))}
        </div>

        <Reveal delay={140}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-2 text-[12.5px] font-medium text-slate-300 transition-colors duration-300 hover:border-violet-400/30 hover:text-white"
              >
                <Glyph name={b.icon} className="h-4 w-4 text-brand-300" />
                {b.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
