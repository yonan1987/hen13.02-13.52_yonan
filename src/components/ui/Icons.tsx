import type { ReactElement, SVGProps } from "react";

export type GlyphName =
  | "house"
  | "bolt"
  | "shield"
  | "tag"
  | "headset"
  | "wallet"
  | "clock"
  | "sparkles"
  | "controller"
  | "truck"
  | "gift"
  | "update"
  | "phone"
  | "mail"
  | "map"
  | "star"
  | "check"
  | "chevron"
  | "arrowRight"
  | "arrowUp"
  | "quote"
  | "menu"
  | "close"
  | "copy"
  | "checkCircle"
  | "chevronRight";

const paths: Record<GlyphName, ReactElement> = {
  house: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />,
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.1 7.9 7.5 9.5 4.4-1.6 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 11.6V4.5a1 1 0 0 1 1-1h7.1a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-6.6 6.6a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7Z" />
      <circle cx="8" cy="8" r="1.4" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13h2.5a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 6.5 19H5.5A1.5 1.5 0 0 1 4 17.5V13Z" />
      <path d="M20 13h-2.5A1.5 1.5 0 0 0 16 14.5v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V13Z" />
      <path d="M20 19v.5a2 2 0 0 1-2 2h-3" />
    </>
  ),
  wallet: (
    <>
      <path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
      <path d="M3.5 9.5h15" />
      <circle cx="16" cy="14" r="1.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3.5 13.6 8l4.5 1.6L13.6 11 12 15.5 10.4 11 6 9.6 10.4 8 12 3.5Z" />
      <path d="M18.5 15.5 19.3 17.7 21.5 18.5 19.3 19.3 18.5 21.5 17.7 19.3 15.5 18.5 17.7 17.7 18.5 15.5Z" />
    </>
  ),
  controller: (
    <>
      <path d="M7.5 7h9a5 5 0 0 1 4.9 4l1 5.2A2.6 2.6 0 0 1 17.6 19a2.5 2.5 0 0 1-2-1l-1.2-1.8H9.6L8.4 18a2.5 2.5 0 0 1-2 1A2.6 2.6 0 0 1 3.6 16l1-5.2A5 5 0 0 1 7.5 7Z" />
      <path d="M7 11v2.5M5.8 12.2h2.4" />
      <circle cx="15.8" cy="11.6" r="1" />
      <circle cx="17.8" cy="13.6" r="1" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 10h4l3 3v3.5h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  gift: (
    <>
      <path d="M3.5 11h17v9.5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V11Z" />
      <path d="M2.5 7.5h19V11h-19z" />
      <path d="M12 7.5V21" />
      <path d="M12 7.5S10.5 3 8 3a2 2 0 0 0 0 4.5h4Zm0 0S13.5 3 16 3a2 2 0 0 1 0 4.5h-4Z" />
    </>
  ),
  update: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20.5 4v4.5H16" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: (
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chevron: <path d="m6 9.5 6 6 6-6" />,
  chevronRight: <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 20V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  quote: (
    <path d="M9.5 5C6.5 6.6 5 9.3 5 12.9V19h6.5v-6.5H8.4c0-2.3.8-3.9 2.6-4.9L9.5 5Zm9 0c-3 1.6-4.5 4.3-4.5 7.9V19h6.5v-6.5h-3.1c0-2.3.8-3.9 2.6-4.9L18.5 5Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </>
  ),
};

export function Glyph({
  name,
  className,
  strokeWidth = 1.6,
  filled = false,
  ...rest
}: {
  name: GlyphName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
} & Omit<SVGProps<SVGSVGElement>, "name">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className, ...rest }: { className?: string } & Omit<SVGProps<SVGSVGElement>, "className">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.41 1.3-1.95 1.35-.5.05-.97.24-3.28-.68-2.77-1.1-4.53-3.94-4.67-4.13-.13-.19-1.11-1.48-1.11-2.82 0-1.35.7-2.01.95-2.28.25-.27.54-.34.72-.34.18 0 .36 0 .51.01.16 0 .39-.06.6.46.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.16-.19.7-.81.89-1.09.19-.27.37-.23.62-.14.25.09 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.17 1.34Z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...rest }: { className?: string } & Omit<SVGProps<SVGSVGElement>, "className">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true" focusable="false" {...rest}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className, ...rest }: { className?: string } & Omit<SVGProps<SVGSVGElement>, "className">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path d="M16.5 3h-2.7v11.3a2.3 2.3 0 1 1-1.8-2.25V9.2a5 5 0 1 0 4.5 4.97V8.9a6 6 0 0 0 3.4 1.07V7.3a3.4 3.4 0 0 1-3.4-3.4V3Z" />
    </svg>
  );
}

export function YouTubeIcon({ className, ...rest }: { className?: string } & Omit<SVGProps<SVGSVGElement>, "className">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path d="M21.6 7.6a2.5 2.5 0 0 0-1.76-1.77C18.27 5.4 12 5.4 12 5.4s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.6C2 9.17 2 12 2 12s0 2.83.4 4.4a2.5 2.5 0 0 0 1.76 1.77c1.57.43 7.84.43 7.84.43s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 14.83 22 12 22 12s0-2.83-.4-4.4ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  );
}
