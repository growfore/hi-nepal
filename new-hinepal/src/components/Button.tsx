import Link from "next/link";

export function Button(props: {link:string, children: React.ReactNode }) {
    return (
        <Link href={props.link}>
        <button className="button button-primary"  style={{ padding: '12px 24px', width: "100%", minWidth: "220px" }}>{props.children}</button>
        </Link>
    )
}