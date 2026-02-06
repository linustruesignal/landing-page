import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-1 w-12 bg-gradient-to-r from-primary-500 to-primary-400", className)}
      aria-hidden="true"
    />
  );
}
