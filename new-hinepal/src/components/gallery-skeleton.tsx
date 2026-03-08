import { Skeleton } from "@/components/ui/skeleton";

const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-4">
      <Skeleton className="col-span-2 h-24" />
      <div className="col-span-1">
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
