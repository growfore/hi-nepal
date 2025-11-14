export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="relative h-[600px] bg-gray-300 animate-pulse">
        {/* Hero Background Skeleton */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-400 to-gray-500" />

        {/* Hero Content Skeleton */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Title Skeleton */}
          <div className="text-center space-y-4 mb-8">
            <div className="h-8 bg-white/20 rounded-lg w-80 mx-auto" />
            <div className="h-8 bg-white/20 rounded-lg w-64 mx-auto" />
          </div>

          {/* Review Bar Skeleton */}
          <div className="bg-white/90 rounded-full px-6 py-3 flex items-center gap-4">
            <div className="flex gap-1">
              {new Array(5).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"
                />
              ))}
            </div>
            <div className="h-4 bg-gray-300 rounded w-32 animate-pulse" />
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-4 bg-gray-300 rounded w-40 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Trek Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trek Info Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {new Array(5).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 shadow-sm border animate-pulse"
                >
                  <div className="w-8 h-8 bg-green-200 rounded-full mb-3" />
                  <div className="h-4 bg-gray-300 rounded w-20 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>

            {/* Permits Section Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded" />
                <div className="h-5 bg-gray-300 rounded w-20" />
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-4/5" />
                <div className="h-3 bg-gray-200 rounded w-3/5" />
              </div>
            </div>

            {/* Overview Section Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-64 mb-6" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-4/5" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Trek Image Card Skeleton */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-300" />
              <div className="p-4">
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-4" />
                <div className="h-12 bg-orange-200 rounded-lg" />
              </div>
            </div>

            {/* Related Packages Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border animate-pulse">
              <div className="h-5 bg-gray-300 rounded w-32 mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-4/5" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
