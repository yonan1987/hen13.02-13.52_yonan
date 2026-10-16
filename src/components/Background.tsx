export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />

      {/* ambient aurora blobs */}
      <div className="absolute -top-52 left-1/2 h-[38rem] w-[62rem] -translate-x-1/2 animate-drift-a rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.34),transparent_65%)] blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] animate-drift-b rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_62%)] blur-3xl" />
      <div className="absolute -left-52 bottom-0 h-[34rem] w-[34rem] animate-drift-a rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.16),transparent_60%)] blur-3xl" />

      {/* structural grid */}
      <div className="absolute inset-0 grid-lines mask-fade-b opacity-60" />

      {/* top spotlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
    </div>
  );
}
