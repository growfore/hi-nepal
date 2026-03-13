import { Skeleton } from "./ui/skeleton";

export default function TrustBadgeSkeleton() {
  return (
    <div className="flex flex-col gap-2 container mx-auto  my-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}
