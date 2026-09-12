export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-300">
        {children}
      </span>
    </span>
  )
}
