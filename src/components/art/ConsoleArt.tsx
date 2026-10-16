import { cn } from "@/utils/cn";
import type { ConsoleKey } from "@/lib/content";

type ConsoleArtProps = {
  variant: ConsoleKey;
  className?: string;
};

const tints: Record<ConsoleKey, { main: string; glow: string; rim: string }> = {
  ps3: { main: "#f59e0b", glow: "#fbbf24", rim: "#7c2d12" },
  ps4: { main: "#38bdf8", glow: "#22d3ee", rim: "#0c4a6e" },
  ps5: { main: "#a78bfa", glow: "#67e8f9", rim: "#4c1d95" },
};

function Controller({ id }: { id: string }) {
  return (
    <g transform="translate(430 596) scale(0.95)">
      <ellipse cx="215" cy="185" rx="190" ry="24" fill="#000000" opacity="0.45" />
      {/* grips */}
      <path
        d="M120 32C58 40 16 92 30 146c10 40 58 46 78 12 16-28 22-70 12-126Z"
        fill={`url(#${id}-body)`}
      />
      <path
        d="M420 32c62 8 104 60 90 114-10 40-58 46-78 12-16-28-22-70-12-126Z"
        fill={`url(#${id}-body)`}
      />
      {/* body */}
      <rect x="120" y="0" width="290" height="104" rx="52" fill={`url(#${id}-body)`} />
      <rect x="120" y="0" width="290" height="104" rx="52" fill={`url(#${id}-gloss)`} opacity="0.5" />
      {/* light bar */}
      <rect x="205" y="12" width="120" height="6" rx="3" fill={`url(#${id}-light)`} opacity="0.9" />
      {/* sticks */}
      <circle cx="190" cy="58" r="17" fill="#0a0e1a" />
      <circle cx="190" cy="58" r="9" fill="#1b2338" />
      <circle cx="330" cy="62" r="17" fill="#0a0e1a" />
      <circle cx="330" cy="62" r="9" fill="#1b2338" />
      {/* d-pad */}
      <g fill="#0a0e1a">
        <rect x="140" y="62" width="34" height="11" rx="4" />
        <rect x="152" y="50" width="11" height="34" rx="4" />
      </g>
      {/* buttons */}
      <g fill="#0a0e1a" opacity="0.9">
        <circle cx="372" cy="44" r="7" />
        <circle cx="388" cy="60" r="7" />
        <circle cx="356" cy="60" r="7" />
        <circle cx="372" cy="76" r="7" />
      </g>
    </g>
  );
}

function Ps3({ id }: { id: string }) {
  return (
    <g>
      <ellipse cx="600" cy="740" rx="230" ry="36" fill="#000" opacity="0.5" />
      <rect x="452" y="140" width="296" height="590" rx="38" fill={`url(#${id}-body)`} />
      <rect
        x="452"
        y="140"
        width="296"
        height="590"
        rx="38"
        fill={`url(#${id}-gloss)`}
        opacity="0.45"
      />
      <rect x="470" y="232" width="260" height="17" rx="8" fill="#05070f" opacity="0.9" />
      <rect x="470" y="232" width="260" height="4" rx="2" fill="#ffffff" opacity="0.12" />
      <g stroke="#ffffff" strokeOpacity="0.08" strokeWidth="3">
        <path d="M486 186h228M486 200h228M486 214h228" />
      </g>
      <circle cx="700" cy="330" r="16" fill={`url(#${id}-light)`} opacity="0.45" />
      <circle cx="700" cy="330" r="5" fill="#e0f2fe" />
      <rect x="560" y="600" width="80" height="7" rx="3.5" fill="#ffffff" opacity="0.14" />
    </g>
  );
}

function Ps4({ id }: { id: string }) {
  const slab = (y: number, width: number, offset: number) => (
    <g key={y}>
      <path
        d={`M${600 - width / 2 + offset} ${y} L${600 + width / 2 + offset - 140} ${y - 96} L${600 + width / 2 + offset} ${y - 20} L${600 - width / 2 + offset + 140} ${y + 76} Z`}
        fill={`url(#${id}-body)`}
      />
      <path
        d={`M${600 - width / 2 + offset} ${y} L${600 - width / 2 + offset + 140} ${y + 76} L${600 - width / 2 + offset + 140} ${y + 96} L${600 - width / 2 + offset} ${y + 20} Z`}
        fill="#05070f"
        opacity="0.85"
      />
      <path
        d={`M${600 - width / 2 + offset + 140} ${y + 76} L${600 + width / 2 + offset} ${y - 20} L${600 + width / 2 + offset} ${y} L${600 - width / 2 + offset + 140} ${y + 96} Z`}
        fill="#0a0f1e"
        opacity="0.9"
      />
    </g>
  );

  return (
    <g>
      <ellipse cx="600" cy="720" rx="250" ry="34" fill="#000" opacity="0.5" />
      {slab(500, 520, 0)}
      {slab(410, 470, 30)}
      {slab(330, 400, 60)}
      <rect
        x="520"
        y="392"
        width="230"
        height="8"
        rx="4"
        fill={`url(#${id}-light)`}
        opacity="0.85"
        transform="rotate(-14 635 396)"
      />
    </g>
  );
}

function Ps5({ id }: { id: string }) {
  return (
    <g>
      <ellipse cx="600" cy="740" rx="200" ry="32" fill="#000" opacity="0.5" />
      {/* wings */}
      <path
        d="M498 150c-46 130-48 360 12 470l74-52c-46-96-44-276 4-368Z"
        fill={`url(#${id}-white)`}
      />
      <path
        d="M702 150c46 130 48 360-12 470l-74-52c46-96 44-276-4-368Z"
        fill={`url(#${id}-white)`}
      />
      {/* core */}
      <rect x="556" y="168" width="88" height="440" rx="22" fill="#05070f" />
      <rect x="556" y="168" width="88" height="440" rx="22" fill={`url(#${id}-gloss)`} opacity="0.35" />
      <rect x="574" y="230" width="52" height="6" rx="3" fill={`url(#${id}-light)`} opacity="0.9" />
      <rect x="574" y="520" width="52" height="6" rx="3" fill={`url(#${id}-light)`} opacity="0.6" />
    </g>
  );
}

/** Vector "product render" of a console on a lit stage. */
export function ConsoleArt({ variant, className }: ConsoleArtProps) {
  const id = `ca-${variant}`;
  const { main, glow } = tints[variant];

  return (
    <div className={cn("relative overflow-hidden bg-[#05060f]", className)}>
      <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label={`Ilustrasi konsol ${variant.toUpperCase()}`}>
        <defs>
          <radialGradient id={`${id}-stage`} cx="50%" cy="40%" r="62%">
            <stop offset="0%" stopColor={main} stopOpacity="0.42" />
            <stop offset="55%" stopColor={main} stopOpacity="0.08" />
            <stop offset="100%" stopColor="#05060f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a2136" />
            <stop offset="45%" stopColor="#0b0f1e" />
            <stop offset="100%" stopColor="#04060e" />
          </linearGradient>
          <linearGradient id={`${id}-white`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#dfe6f5" />
            <stop offset="100%" stopColor="#9aa6c4" />
          </linearGradient>
          <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`${id}-light`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={glow} />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <radialGradient id={`${id}-vig`} cx="50%" cy="50%" r="72%">
            <stop offset="55%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
          </radialGradient>
          <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="34" />
          </filter>
        </defs>

        <rect width="1600" height="900" fill="#05060f" />
        <rect width="1600" height="900" fill={`url(#${id}-stage)`} />

        {/* floor reflection */}
        <ellipse cx="600" cy="700" rx="330" ry="110" fill={main} opacity="0.16" filter={`url(#${id}-blur)`} />

        {/* bokeh */}
        <g fill={glow}>
          <circle cx="250" cy="210" r="46" opacity="0.07" />
          <circle cx="960" cy="170" r="70" opacity="0.05" />
          <circle cx="1030" cy="520" r="38" opacity="0.06" />
          <circle cx="190" cy="560" r="30" opacity="0.05" />
        </g>

        <g transform="translate(200 0)">
          {variant === "ps3" ? <Ps3 id={id} /> : variant === "ps4" ? <Ps4 id={id} /> : <Ps5 id={id} />}

          <Controller id={id} />
        </g>

        <rect width="1600" height="900" fill={`url(#${id}-vig)`} />
      </svg>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.07),transparent_70%)]"
      />
    </div>
  );
}
