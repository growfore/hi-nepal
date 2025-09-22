import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          title="whatsapp us"
          href="https://wa.me/9779856035091"
          target="_blank"
          className="flex gap-3 items-center justify-center fixed bottom-4 right-4 bg-green-500 text-white rounded-full shadow-lg p-4"
        >
          <MessageCircle size={42} />
        </Link>
      </TooltipTrigger>
      <TooltipContent className="">Message us on Whatsapp</TooltipContent>
    </Tooltip>
  );
}
