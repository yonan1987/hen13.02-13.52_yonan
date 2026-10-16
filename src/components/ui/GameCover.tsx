import { cn } from "@/utils/cn";
import type { GameItem } from "@/lib/content";

type GameCoverProps = {
  item: GameItem;
  className?: string;
};

/** Stylised, generated game "poster" — no external assets required. */
export function GameCover({ item, className }: GameCoverProps) {
  const [c1, c2] = item.colors;

  return (
    <article
      className={cn(
        "group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25",
        className,
      )}
      style={{ background: `linear-gradient(155deg, ${c1} 0%, ${c2} 100%)` }}
    >
      <div
        aria-hidden
        className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl transition-transform duration-700 group-hover:scale-150"
      />
      <div
        aria-hidden
        className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/35 blur-2xl transition-transform duration-700 group-hover:scale-150"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 9px)",
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-2.5 sm:p-3.5">
        {item.badge ? (
            <span className="w-fit rounded-full bg-black/45 px-1.5 py-0.5 text-[7.5px] font-bold tracking-[0.12em] text-white backdrop-blur-sm sm:px-2 sm:text-[9px] sm:tracking-[0.14em]">
              {item.badge}
            </span>
        ) : (
          <span />
        )}

        <div>
          <div
            aria-hidden
            className="mb-1 font-display text-3xl leading-none font-extrabold text-white/85 transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl"
          >
            {item.title.charAt(0)}
          </div>
          <h4 className="line-clamp-2 font-display text-[10.5px] leading-tight font-semibold text-white drop-shadow-sm sm:text-[13px]">
            {item.title}
          </h4>
          <p className="mt-0.5 text-[8px] font-medium tracking-[0.14em] text-white/70 uppercase sm:text-[10px] sm:tracking-[0.16em]">
            {item.genre}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)" }}
      />
    </article>
  );
}
