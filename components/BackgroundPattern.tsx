export default function BackgroundPattern() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand-200/40 blur-[110px] animate-blobMove" />
      <div
        className="absolute right-[-10%] top-[8%] h-[380px] w-[380px] rounded-full bg-brand-100/60 blur-[100px] animate-blobMove"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[460px] w-[460px] rounded-full bg-blush blur-[120px] animate-blobMove"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
