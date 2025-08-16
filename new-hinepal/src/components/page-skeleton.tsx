import { Skeleton } from "@/components/ui/skeleton"

export function TravelPageSkeleton() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Skeleton className="w-[200px] h-[40px]" />
                    {/* Navigation */}
                    <Skeleton className="w-[120px] h-[40px] rounded-lg" />
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-16">
                {/* Hero Title */}
                <div className="text-center mb-16">
                    <Skeleton className="w-[300px] h-[80px] mx-auto mb-8" />
                    <Skeleton className="w-[400px] h-[2px] mx-auto" />
                </div>

                {/* About Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Heading */}
                    <div className="space-y-6">
                        <Skeleton className="w-[120px] h-[16px] bg-orange-200" />
                        <div className="space-y-4">
                            <Skeleton className="w-full h-[48px]" />
                            <Skeleton className="w-[90%] h-[48px]" />
                            <Skeleton className="w-[80%] h-[48px]" />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-4">
                        <Skeleton />
                    </div>
                </div>
            </main>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6">
                <Skeleton  className="w-[56px] h-[56px] bg-green-200" />
            </div>
        </div>
    )
}
