import { Skeleton } from "@/components/ui/skeleton";

const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-3 h-auto md:min-h-120 gap-4 container mx-auto">
      <Skeleton className="col-span-2 h-120" />
      <div className="col-span-1 h-120 gap-4 hidden md:grid">
        <Skeleton className="h-56 w-full" />
        <Skeleton className="h-56 w-full" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
