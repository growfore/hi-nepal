import Link from "next/link";
import Image from "next/image";

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
      <div className=" w-[380px] h-[542px] bg-slate-100 p-4 shadow-sm  rounded-md flex flex-col items-start gap-2">
        <div className="max-h-[240px] overflow-hidden rounded-md">
          <Image
            src={image}
            alt={title}
            height={200}
            width={600}
            className="rounded-sm w-fill h-fit object-cover"
          />
        </div>
        <div className="mt-4">
          {/* <Badge className="bg-green-700">
            <LucideTimer /> {days} Day(s)
          </Badge> */}
          <h3 className="font-bold text-xl">
            {title.split(":")[0].length > 30
              ? title.split(":")[0].substring(0, 30) + "..."
              : title.split(":")[0]}
          </h3>
        </div>
      </div>
    </Link>
  );
}
