import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          title="whatsapp us"
          href="https://wa.me/9779856035091"
          target="_blank"
          className="flex gap-3 items-center justify-center fixed bottom-4 right-4  rounded-full"
        >
          <Image
            src={"/assets/whatsapp-icon.webp"}
            height={60}
            width={60}
            alt="Whatsapp Icon - Click to Contact on Whatsapp"
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent className="">Message us on Whatsapp</TooltipContent>
    </Tooltip>
  );
}
