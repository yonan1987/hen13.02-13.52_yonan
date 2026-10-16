import { brand, coverageAreas, whatsappLink } from "@/lib/content";
import { Glyph } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-violet-600/25 via-ink-900 to-cyan-500/12 p-8 text-center backdrop-blur-2xl sm:p-14">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-72 w-[38rem] -translate-x-1/2 animate-drift-a rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.55),transparent_65%)] blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-40 right-0 h-72 w-72 animate-drift-b rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.40),transparent_65%)] blur-3xl"
            />
            <div aria-hidden className="absolute inset-0 grid-lines opacity-40" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[12px] font-medium text-slate-200 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                4 teknisi standby · slot hari ini tersisa 6
              </span>

              <h2 className="mx-auto mt-7 max-w-3xl text-3xl leading-[1.12] font-extrabold sm:text-4xl lg:text-[3.1rem]">
                Siap main <span className="text-gradient">hari ini juga?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-[16.5px]">
                Kirim satu chat, sebutkan konsol dan judul game favoritmu. Tim kami tangani sisanya — sampai
                kamu tekan tombol start.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={whatsappLink("Halo Mikayla_games, saya mau pesan jasa isi game PS3/PS4/PS5 sekarang.")}
                  variant="whatsapp"
                  size="lg"
                  icon={<Glyph name="phone" className="h-4 w-4" />}
                >
                  Pesan Sekarang
                </Button>
                <Button href={`tel:${brand.phoneRaw}`} variant="outline" size="lg" icon={<Glyph name="phone" className="h-4 w-4" />}>
                  {brand.phoneDisplay}
                </Button>
              </div>

              <p className="mt-6 text-[12.5px] text-slate-400">
                {brand.hours} · Balasan rata-rata 5 menit · Pembayaran COD tersedia
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  Area layanan
                </p>
                <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {coverageAreas.map((area, i) => (
                    <li
                      key={`${area}-${i}`}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] text-slate-300 transition-colors duration-300 hover:border-cyan-300/40 hover:text-white"
                    >
                      {area}
                    </li>
                  ))}
                  <li className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3.5 py-1.5 text-[12.5px] font-semibold text-cyan-200">
                    + kota lainnya
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
