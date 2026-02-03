"use client";

import Image from "next/image"
import { Button } from "./ui/button"
import { LucideImages } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import MyToolTip from "./my-tooltip";

export default function ImageGallery({ images }: { images: any[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-lg overflow-hidden">
        <div className="col-span-2 relative aspect-4/3">
          {images &&
            <Image
              src={images[0]}
              alt={"Gallery Image 1"}
              fill
              sizes="(max-width: 1920px) 100vw, (max-width: 1200px) 50vw,
              33vw"
              className="object-cover"
            />
          }
        </div>
        <div className="hidden md:grid grid-rows-2 gap-2">
          {images &&
            images.length > 1 &&
            images.slice(1, 3).map((image, index) => (
              <div className="relative aspect-[4/3]" key={index}>
                <Image
                  src={image}
                  alt={`Gallery image ${index}`}
                  fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,
              33vw"
                  className="object-cover"
                />
              </div>
            ))
          }
          <MyToolTip content={`${images?.length} images`}>
            <Button size={'icon'} variant="outline" className="absolute bottom-1 right-1 bg-white/70 hover:bg-white" onClick={() => setOpen(true)}>
              <LucideImages className="size-4" />
            </Button>
          </MyToolTip>
          {
            open &&
            <ImageModal images={images} open={open} onOpenChange={setOpen} />
          }
        </div>
      </div>
    </div>
  )
}

function ImageModal({ images, open, onOpenChange }: { images: any[], open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl w-full h-[98vh] bg-card  overflow-auto">
        <DialogHeader>
          <DialogTitle>All Images</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-8">
          {images?.map((image, index) => (
            <img
              src={image}
              alt={`Gallery image ${index}`}
              key={image}
              height={100}
              className="w-full rounded-xl"
              onClick={() => window.open(image)}
            />
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
}