"use client";

export default function GridOverlay({ show = true }: { show?: boolean }) {
  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
    >
      <div className="mx-auto h-full max-w-7xl px-8">
        <div className="grid h-full grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-x"
              style={{
                borderColor: "rgba(0, 0, 0, 0.03)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
