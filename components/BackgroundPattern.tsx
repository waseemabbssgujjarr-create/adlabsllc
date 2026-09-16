export default function BackgroundPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.5]"
    >
      <svg width="100%" height="100%" className="h-full w-full">
        <defs>
          <pattern id="ledger-grid" width="88" height="88" patternUnits="userSpaceOnUse">
            <path
              d="M 88 0 L 0 0 0 88"
              fill="none"
              stroke="#12161C"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
            <circle cx="0" cy="0" r="1.1" fill="#12161C" fillOpacity="0.08" />
          </pattern>
          <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EFECE3" stopOpacity="0" />
            <stop offset="100%" stopColor="#EFECE3" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ledger-grid)" />
      </svg>
    </div>
  );
}
