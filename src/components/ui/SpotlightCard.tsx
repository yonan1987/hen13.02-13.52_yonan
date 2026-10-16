import { useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  glow?: string;
  radius?: number;
};

/** Card that renders a soft radial glow following the pointer. */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(139,92,246,0.20)",
  radius = 380,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/20",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
