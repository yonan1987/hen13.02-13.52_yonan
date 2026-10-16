import { useState } from "react";
import { pricingTiers, whatsappLink } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rupiah = (value: number) => "Rp" + value.toLocaleString("id-ID");

const modes = [
  { key: "toko", label: "Ambil di Toko", note: "Gratis ongkir" },
  { key: "rumah", label: "Panggilan ke Rumah", note: "+Rp15.000" },
] as const;

type ModeKey = (typeof modes)[number]["key"];

export function Pricing() {
  const [mode, setMode] = useState<ModeKey>("rumah");
  const [activeIndex, setActiveIndex] = useState(1);

  const handleMode = (key: ModeKey, index: number) => {
    setMode(key);
    setActiveIndex(index);
  };

  return (
    <section id="harga" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[30rem] w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.16),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Harga jujur"
          title={
            <>
              Harga jelas di depan, <span className="text-gradient">tidak ada biaya siluman</span>
            </>
          }
          description="Harga sudah termasuk update terbaru, garansi 30 hari, dan dukungan teknis. Tinggal pilih paket yang paling masuk akal untuk kamu."
        />

        {/* mode switch */}
        <Reveal delay={120}>
          <div className="mt-11 flex flex-col items-center gap-3">
            <div
              role="group"
              aria-label="Pilih metode layanan"
              className="relative flex w-full max-w-md items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl"
            >
              <span
                aria-hidden
                className="absolute rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_10px_28px_-12px_rgba(139,92,246,0.9)] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                style={{
                  top: "0.375rem",
                  bottom: "0.375rem",
                  width: "calc(50% - 0.5rem)",
                  left: `calc(0.375rem + ${activeIndex} * (50% + 0.125rem))`,
                }}
              />
              {modes.map((m, i) => {
                const selected = mode === m.key;
                return (
                  <button
                    key={m.key}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => handleMode(m.key, i)}
                    className={`relative z-10 flex-1 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors duration-300 sm:text-sm ${
                      selected ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
            <p className="text-[12.5px] text-slate-500">
              {mode === "rumah"
                ? "Teknisi datang ke lokasi Anda — biaya ongkir flat Rp15.000 untuk area Jabodetabek."
                : "Ambil langsung di workshop kami, gratis ongkir untuk area Jabodetabek."}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-start">
          {pricingTiers.map((tier, i) => {
            const price = mode === "rumah" ? tier.price + 15000 : tier.price;
            return (
              <Reveal key={tier.name} delay={i * 110} className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 ${
                    tier.featured
                      ? "border-violet-400/40 bg-gradient-to-b from-violet-500/12 to-transparent shadow-[0_30px_90px_-40px_rgba(139,92,246,0.9)] lg:-mt-4 lg:pb-9"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  {tier.featured ? (
                    <>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),transparent_70%)] blur-2xl"
                      />
                      <span className="absolute top-5 right-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                        {tier.badge}
                      </span>
                    </>
                  ) : null}

                  <h3 className="relative font-display text-lg font-bold text-white">{tier.name}</h3>
                  <p className="relative mt-1.5 text-[13px] text-slate-400">{tier.tagline}</p>

                  <div className="relative mt-7 flex items-end gap-1.5">
                    <span className="font-display text-[2.6rem] leading-none font-extrabold text-white">
                      {rupiah(price)}
                    </span>
                    <span className="pb-1.5 text-[12.5px] text-slate-500">{tier.unit}</span>
                  </div>
                  <p className="relative mt-1.5 text-[12px] text-slate-500">
                    {mode === "rumah" ? "Termasuk ongkir panggilan ke rumah" : "Tanpa ongkir, ambil di workshop"}
                  </p>

                  <div className="relative my-6 h-px w-full bg-gradient-to-r from-white/12 to-transparent" />

                  <ul className="relative flex-1 space-y-3.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md ${
                            tier.featured
                              ? "bg-gradient-to-br from-violet-500 to-cyan-400"
                              : "bg-white/8"
                          }`}
                        >
                          <Glyph
                            name="check"
                            className={`h-3 w-3 ${tier.featured ? "text-white" : "text-brand-200"}`}
                            strokeWidth={2.6}
                          />
                        </span>
                        <span className="text-[13.5px] text-slate-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={whatsappLink(`Halo Mikayla_games, saya mau ambil paket "${tier.name}" (${mode === "rumah" ? "panggilan ke rumah" : "ambil di toko"}).`)}
                    variant={tier.featured ? "primary" : "outline"}
                    size="md"
                    className="relative mt-8 w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <p className="mt-10 text-center text-[12.5px] text-slate-500">
            Semua paket sudah termasuk update game terbaru, garansi 30 hari, dan dukungan WhatsApp 24/7. Permintaan
            judul di luar daftar akan kami cek ketersediaannya lebih dulu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
