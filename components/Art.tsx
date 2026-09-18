// Elegant abstract art panels used in place of photography, so the
// design ships fully self-contained. Swap the <Art> usages for real
// photos any time by dropping images into /public and using next/image.

const gradients: Record<string, string> = {
  rose: "from-brand-600 via-brand-500 to-brand-400",
  plum: "from-[#5A1140] via-brand-700 to-brand-500",
  gold: "from-[#B67A2E] via-brand-600 to-brand-400",
  ink: "from-ink via-[#3C1730] to-brand-600",
  sunset: "from-brand-500 via-[#E7793A] to-gold",
};

export function Art({
  icon: Icon,
  tone = "rose",
  className = "",
  pattern = "grid",
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tone?: keyof typeof gradients;
  className?: string;
  pattern?: "grid" | "dots" | "rings" | "waves";
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradients[tone]} ${className}`}>
      <PatternOverlay pattern={pattern} />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-black/10 blur-2xl" />
      <div className="relative flex h-full w-full items-center justify-center">
        <Icon className="h-[34%] w-[34%] text-white/90 drop-shadow-sm" />
      </div>
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
    </div>
  );
}

function PatternOverlay({ pattern }: { pattern: string }) {
  const uid = `art-${pattern}`;
  if (pattern === "dots") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden>
        <defs>
          <pattern id={uid} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uid})`} />
      </svg>
    );
  }
  if (pattern === "rings") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-[0.16]" viewBox="0 0 200 200" aria-hidden>
        <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="65" fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }
  if (pattern === "waves") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden>
        <path d="M0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30" fill="none" stroke="white" strokeWidth="2" />
        <path d="M0 55 Q 25 35 50 55 T 100 55 T 150 55 T 200 55" fill="none" stroke="white" strokeWidth="2" />
        <path d="M0 80 Q 25 60 50 80 T 100 80 T 150 80 T 200 80" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.14]" aria-hidden>
      <defs>
        <pattern id={uid} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid})`} />
    </svg>
  );
}

export function PlayArt({
  tone = "ink",
  label,
  className = "",
}: {
  tone?: keyof typeof gradients;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`group relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[tone]} ${className}`}>
      <PatternOverlay pattern="waves" />
      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
        <span className="pulse-ring absolute inset-0 rounded-full" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-5 w-5">
          <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.5-6.86a1 1 0 0 0 0-1.7L9.53 4.3A1 1 0 0 0 8 5.14Z" />
        </svg>
      </div>
      {label && (
        <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-[0.68rem] font-medium text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
