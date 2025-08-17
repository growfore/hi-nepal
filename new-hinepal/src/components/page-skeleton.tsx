import { Skeleton } from "@/components/ui/skeleton"

export default function PageSkeleton() {
  return (
    <div className="min-h-screen w-full mt-32 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl p-6 md:p-8">
          <div className="mb-8">
            <Skeleton className="h-12 w-full max-w-md mx-auto rounded-xl" />
          </div>

          <div className="mb-8">
            <div className="h-px bg-border w-full" />
          </div>

          <div className="space-y-6">
            <Skeleton className="h-32 w-full rounded-2xl md:h-40" />
            <Skeleton className="h-32 w-full rounded-2xl md:h-40" />
            <Skeleton className="h-32 w-full rounded-2xl md:h-40" />
          </div>
        </div>
      </div>
    </div>
  )
}
