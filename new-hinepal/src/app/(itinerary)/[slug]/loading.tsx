import { Skeleton } from "@/components/ui/skeleton";

const STARS = Array(5).fill(0);

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Skeleton className="absolute inset-0 h-full w-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="space-y-4 mb-8 text-center">
            <Skeleton className="h-8 w-80 mx-auto rounded-lg" />
            <Skeleton className="h-8 w-64 mx-auto rounded-lg" />
          </div>

          <div className="flex items-center gap-4 bg-white/90 rounded-full px-6 py-3">
            <div className="flex gap-1">{STARS.map((_, i) => <Skeleton key={i} className="w-3 h-3 rounded-full" />)}</div>
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="h-4 w-40 rounded" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Trek Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {STARS.map((_, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm space-y-2">
                <Skeleton className="w-8 h-8 rounded-full mb-2" />
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-3 w-full rounded" />
                <Skeleton className="h-3 w-3/4 rounded" />
              </div>
            ))}
          </div>

          {/* Permits Section */}
          <div className="p-6 border rounded-lg shadow-sm space-y-2">
            <div className="flex items-center gap-3 mb-4">
              <Skeleton className="w-8 h-8 rounded" />
              <Skeleton className="h-5 w-20 rounded" />
            </div>
            {["w-full", "w-4/5", "w-3/5"].map((w, i) => (
              <Skeleton key={i} className={`h-3 ${w} rounded`} />
            ))}
          </div>

          {/* Overview Section */}
          <div className="p-6 border rounded-lg shadow-sm space-y-4">
            <Skeleton className="h-6 w-64 rounded mb-6" />
            {[ "3/4", "5/6", "4/5", "2/3" ].map((w, idx) => (
              <div key={idx} className="space-y-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className={`h-4 w-${w} rounded`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {[{ h: "h-48", title: "w-3/4", button: "h-12" }, { h: "h-5", title: "w-32", lines: ["w-full","w-4/5","w-3/4"] }].map((card, idx) => (
            <div key={idx} className="border rounded-lg shadow-sm overflow-hidden p-6 space-y-3">
              <Skeleton className={`${card.h} w-full rounded`} />
              {card.title && <Skeleton className={`h-5 ${card.title} rounded`} />}
              {card.button && <Skeleton className={`${card.button} rounded-lg`} />}
              {card.lines?.map((w, i) => <Skeleton key={i} className={`h-4 ${w} rounded`} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
