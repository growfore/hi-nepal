import Link from 'next/link';
import { LucideMessageCircle } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function WhatsAppButton() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Link
                    title='whatsapp us'
                    href="https://wa.me/9779856035091"
                    target='_blank'
                    className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg"
                >
                    <LucideMessageCircle className="w-6 h-6" />
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>
                    Message us on Whatsapp
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
