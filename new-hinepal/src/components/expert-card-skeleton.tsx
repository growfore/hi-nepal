import { Skeleton } from "@/components/ui/skeleton";

export function ExpertCardSkeleton() {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 max-h-[364px] overflow-hidden mb-8">
      {/* Header Section */}
      <Skeleton className="h-8 w-64 mb-8" />

      {/* Expert Info Section */}
      <div className="flex gap-6 mb-8">
        {/* Profile Image */}
        <Skeleton className="w-32 h-32 rounded-full flex-shrink-0" />

        {/* Expert Details */}
        <div className="flex-1 space-y-3">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-6 w-56" />
        </div>
      </div>

      {/* Features List */}
      <div className="space-y-3 mb-8">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>

      {/* Buttons */}
      <div className="space-y-3 mb-6">
        <Skeleton className="h-14 w-full rounded-lg" />
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>

      {/* Review Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center gap-4">
          <Skeleton className="w-20 h-20 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-8 w-24 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
