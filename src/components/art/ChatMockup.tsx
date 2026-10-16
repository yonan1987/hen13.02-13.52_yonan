import { cn } from "@/utils/cn";
import { Glyph } from "@/components/ui/Icons";

type Message = {
  from: "me" | "them" | "system";
  text: string;
  time?: string;
};

const messages: Message[] = [
  { from: "them", text: "Halo Kak! Saya 12 menit lagi sampai 📍", time: "19:42" },
  { from: "me", text: "Kakak, install PS5 + update yang terbaru ya", time: "19:43" },
  { from: "them", text: "Siap Kak! File sudah siap, langsung saya pasang ✨", time: "19:43" },
  { from: "system", text: "Instalasi selesai · 12 menit · Garansi 30 hari" },
  { from: "them", text: "Sudah bisa main, Ketik apa lagi Kak?", time: "19:55" },
];

function Avatar({ side }: { side: "me" | "them" }) {
  return (
    <span
      className={cn(
        "grid h-7 w-7 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white",
        side === "me" ? "bg-gradient-to-br from-violet-500 to-cyan-500" : "bg-gradient-to-br from-slate-500 to-slate-700",
      )}
    >
      {side === "me" ? "KA" : "MG"}
    </span>
  );
}

/** Phone-style chat mockup showing the service flow. */
export function ChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[19rem] rounded-[2rem] border border-white/12 bg-gradient-to-b from-white/[0.10] to-white/[0.02] p-1.5 shadow-[0_34px_90px_-34px_rgba(0,0,0,0.95)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-ink-900/85">
        {/* chat header */}
        <div className="flex items-center gap-2.5 border-b border-white/8 bg-white/[0.04] px-3.5 py-3">
          <Avatar side="them" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-semibold text-white">Mikayla_games</p>
            <p className="flex items-center gap-1 text-[10px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              online · balas cepat
            </p>
          </div>
          <Glyph name="phone" className="h-4 w-4 text-slate-400" />
        </div>

        {/* messages */}
        <div className="space-y-2.5 px-3 py-4">
          {messages.map((m, i) =>
            m.from === "system" ? (
              <div key={i} className="flex justify-center py-1">
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-center text-[10px] font-medium text-emerald-200">
                  {m.text}
                </span>
              </div>
            ) : (
              <div key={i} className={cn("flex items-end gap-2", m.from === "me" && "flex-row-reverse")}>
                <Avatar side={m.from} />
                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-3 py-2 text-[11.5px] leading-snug",
                    m.from === "me"
                      ? "rounded-br-sm bg-gradient-to-br from-violet-600 to-cyan-600 text-white"
                      : "rounded-bl-sm bg-white/[0.08] text-slate-200",
                  )}
                >
                  {m.text}
                  {m.time ? (
                    <span
                      className={cn(
                        "mt-1 block text-[9px]",
                        m.from === "me" ? "text-white/70" : "text-slate-500",
                      )}
                    >
                      {m.time}
                    </span>
                  ) : null}
                </div>
              </div>
            ),
          )}
        </div>

        {/* input bar */}
        <div className="flex items-center gap-2 border-t border-white/8 px-3 py-2.5">
          <span className="h-8 flex-1 rounded-full bg-white/[0.06]" />
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500">
            <Glyph name="arrowRight" className="h-3.5 w-3.5 text-white" />
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_68%)] blur-2xl"
      />
    </div>
  );
}
