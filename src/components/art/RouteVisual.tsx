import { cn } from "@/utils/cn";
import { Glyph } from "@/components/ui/Icons";

/** Abstract map view with a glowing route — used for the "panggilan ke rumah" card. */
export function RouteVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-white/10 bg-[#070a16]", className)}>
      <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Peta rute pengiriman teknisi ke rumah pelanggan">
        <defs>
          <linearGradient id="rv-route" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="rv-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <rect width="600" height="420" fill="#070a16" />

        {/* blocks */}
        <g fill="#0e1428">
          <rect x="28" y="34" width="130" height="96" rx="10" />
          <rect x="190" y="20" width="96" height="80" rx="10" />
          <rect x="320" y="44" width="150" height="74" rx="10" />
          <rect x="500" y="30" width="76" height="120" rx="10" />
          <rect x="20" y="170" width="104" height="110" rx="10" />
          <rect x="160" y="140" width="120" height="74" rx="10" />
          <rect x="330" y="160" width="90" height="120" rx="10" />
          <rect x="460" y="190" width="116" height="90" rx="10" />
          <rect x="40" y="320" width="150" height="76" rx="10" />
          <rect x="250" y="320" width="120" height="76" rx="10" />
          <rect x="420" y="310" width="150" height="86" rx="10" />
        </g>

        {/* streets */}
        <g stroke="#1b2440" strokeWidth="10" strokeLinecap="round">
          <path d="M0 150h600M0 300h600M150 0v420M310 0v420M470 0v420" />
        </g>

        {/* route */}
        <path
          d="M92 400 L92 300 L150 300 L150 150 L310 150 L310 96 L470 96 L470 232 L520 232"
          fill="none"
          stroke="url(#rv-route)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M92 400 L92 300 L150 300 L150 150 L310 150 L310 96 L470 96 L470 232 L520 232"
          fill="none"
          stroke="url(#rv-route)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
          filter="url(#rv-glow)"
        />

        {/* courier dot */}
        <g>
          <circle cx="150" cy="150" r="16" fill="#22d3ee" opacity="0.35" filter="url(#rv-glow)" />
          <circle cx="150" cy="150" r="8" fill="#67e8f9" />
          <circle cx="150" cy="150" r="3" fill="#ffffff" />
        </g>

        {/* destination pin */}
        <g transform="translate(520 210)">
          <circle cx="0" cy="0" r="26" fill="#8b5cf6" opacity="0.28" filter="url(#rv-glow)" />
          <path
            d="M0 14c0 0 16-15 16-25A16 16 0 0 0-16-11C-16-1 0 14 0 14Z"
            transform="translate(0 -4)"
            fill="#a78bfa"
          />
          <circle cx="0" cy="-11" r="5.5" fill="#0b0f1f" />
        </g>
      </svg>

      {/* status overlay */}
      <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl border border-white/12 bg-ink-950/75 px-3.5 py-3 backdrop-blur-xl">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-500/20 text-emerald-300">
          <Glyph name="checkCircle" className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12.5px] font-semibold text-white">Tiba di lokasi Anda</p>
          <p className="truncate text-[11px] text-slate-400">Status: Instalasi berjalan · 4 menit</p>
        </div>
      </div>
    </div>
  );
}
