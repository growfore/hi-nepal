import Link from "next/link";

export function Button(props: { link: string, children: React.ReactNode, navButton?: boolean }) {
    return (
        <Link href={props.link}>
            {props.navButton ?
                <button id="nav-btn" className="button button-primary" style={{ padding: '12px 8px', width: "100%", minWidth: "150px" }}>{props.children}</button>
                :
                <button className="button button-primary" style={{ padding: '12px 8px', width: "100%", minWidth: "120px" }}>{props.children}</button>
            }
        </Link>
    )
}