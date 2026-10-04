export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="size-7 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="4" fill="#efece4" />
        <path
          d="M8 23V9h3.2l7.4 9.6V9H22v14h-3.2L11.4 13.4V23H8Z"
          fill="#141613"
        />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] tracking-tight text-cream">
          NNX
        </span>
        <span className="mt-0.5 block font-mono text-[0.62rem] tracking-[0.14em] text-mist uppercase">
          Data & Digital Insight
        </span>
      </span>
    </span>
  );
}
