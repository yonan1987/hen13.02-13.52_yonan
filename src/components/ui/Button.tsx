import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Glyph } from "@/components/ui/Icons";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 text-white shadow-[0_16px_44px_-14px_rgba(124,58,237,0.85)] hover:shadow-[0_20px_54px_-12px_rgba(34,211,238,0.75)] hover:-translate-y-0.5",
  outline:
    "border border-white/15 bg-white/[0.04] text-slate-100 backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white hover:bg-white/[0.06]",
  whatsapp:
    "bg-[#25D366] text-[#052e16] shadow-[0_16px_40px_-16px_rgba(37,211,102,0.9)] hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-14px_rgba(37,211,102,0.8)]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon ?? <Glyph name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  );

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
