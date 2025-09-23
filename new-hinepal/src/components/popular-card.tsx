import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { LucideTimer } from "lucide-react";

type TCardProps = {
  slug: string;
  image: string;
  title: string;
  days?: string | null;
};

export default async function PopularCard({
  slug,
  image,
  title,
  days,
}: TCardProps) {
  return (
    <Link href={slug}>
      <div className="bg-slate-100 p-4 shadow-sm md:h-[340px] rounded-md flex flex-col items-start gap-2">
        <div className="max-h-[240px] overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            height={200}
            width={600}
            className="rounded-sm w-fill h-fit object-cover"
          />
        </div>
        <div className="mt-4">
          <Badge className="bg-green-700">
            <LucideTimer /> {days} Day(s)
          </Badge>
          <p className="font-bold text-xl">
            {title.split(":")[0].length > 30
              ? title.split(":")[0].substring(0, 30) + "..."
              : title.split(":")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
