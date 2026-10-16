import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-200 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={90}>
        <h2 className="mt-5 max-w-3xl text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-base",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
