import { Skeleton } from "../ui/skeleton";

export function VideoSkeleton() {
  return (
    <div className="space-y-1">
      <Skeleton className="aspect-video w-full" />
      <div className="space-x-1">
        <Skeleton className="inline-flex h-9 w-16" />
        <Skeleton className="inline-flex h-9 w-16 opacity-90" />
        <Skeleton className="inline-flex h-9 w-16 opacity-80" />
      </div>
    </div>
  );
}
