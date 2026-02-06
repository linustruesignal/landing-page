import { cn } from "@/lib/utils";

/**
 * SignalCrew brand mark — ascending signal bars that transition from blue to green.
 * Uses `fill="currentColor"` by default so the parent can control color via text utilities.
 * Pass `branded` to use the blue-to-green gradient.
 */
export function SignalCrewMark({
  className = "",
  branded = false,
}: {
  className?: string;
  branded?: boolean;
}) {
  if (branded) {
    return (
      <svg
        viewBox="0 0 28 24"
        fill="none"
        className={cn("h-6 w-auto", className)}
        aria-hidden="true"
      >
        <rect x="0" y="16" width="4" height="8" rx="1" fill="#93C5FD" />
        <rect x="8" y="10" width="4" height="14" rx="1" fill="#60A5FA" />
        <rect x="16" y="4" width="4" height="20" rx="1" fill="#2563EB" />
        <rect x="24" y="0" width="4" height="24" rx="1" fill="#10B981" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      className={cn("h-6 w-auto", className)}
      aria-hidden="true"
    >
      <rect x="0" y="16" width="4" height="8" rx="1" fill="currentColor" />
      <rect x="8" y="10" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="16" y="4" width="4" height="20" rx="1" fill="currentColor" />
      <rect x="24" y="0" width="4" height="24" rx="1" fill="currentColor" />
    </svg>
  );
}

/**
 * Full SignalCrew wordmark with icon.
 * "Signal" in primary blue, "Crew" in accent green.
 */
export function SignalCrewWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <SignalCrewMark branded />
      <span className="font-display text-base font-bold tracking-tight">
        <span className="text-primary-600">Signal</span>
        <span className="text-accent-500">Crew</span>
      </span>
    </span>
  );
}
