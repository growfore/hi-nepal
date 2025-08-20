import Link from 'next/link';
import { LucideMessageCircle, MessageCircle } from "lucide-react";
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
                    className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full shadow-lg p-4"
                >
                    <MessageCircle size={24}/>
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
