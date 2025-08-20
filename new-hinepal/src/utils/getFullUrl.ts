import { headers } from "next/headers";

export function getFullUrl(pathname?: string) {
    try {
        const headersList = headers();
        const host = headersList.get("host");
        const protocol = headersList.get("x-forwarded-proto") || "http";

        return `${protocol}://${host}${pathname || ""}`;
    } catch {
        if (typeof window !== "undefined") {
            return window.location.origin + (pathname || window.location.pathname);
        }
    }

    return "";
}
