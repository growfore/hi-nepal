import { LucideTimer } from "lucide-react"
import { getProxyUrl } from "../utils/imageProxy"

type TCardProps = {
  slug: string
  image: string
  title: string
  days?: string | null
}

export default function TrekkingCard({image, title, days }: TCardProps) {
  return (
    <div className="max-w-[380px]">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">
        <div className="relative aspect-[16/9] w-[420px] overflow-hidden">
          <img
            src={getProxyUrl(image) || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />

          {/* Dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Title overlay with improved contrast */}
          <div className="absolute bottom-6 left-6 md:bottom-4 md:left-4 text-white z-10">
            {days && (
              <div className="flex items-center gap-1 p-1 text-lg bg-green-700 px-2 w-fit rounded-md mb-2">
                <LucideTimer className="w-4 h-4" />
                {days.includes(":") ? days : `${days} Day(s)`}
              </div>
            )}
            <h3 className="text-3xl md:text-2xl sm:text-xl font-bold m-0 leading-tight text-white drop-shadow-2xl">
              {title.split(":")[0]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
