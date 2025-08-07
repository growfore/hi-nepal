import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

export function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <div className="p-8">
                <Link href={href}>
                    <div className="text-md leading-none font-bold">{title}</div>
                </Link>
                {children}
                {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}

          </p> */}
            </div>
        </li>
    )
}
