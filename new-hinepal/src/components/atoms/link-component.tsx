import Link from "next/link";

export default function HLinkComp({
  href,
  text,
  comma,
  linkColor="green-700",
}: {
  href: string;
  text: string;
  comma?: boolean;
  linkColor?:string;
}) {
  return (
    <span>
      {" "}
      <Link href={href} className={`text-${linkColor} underline`}>
        {text}
      </Link>
      {comma && ","}{" "}
    </span>
  );
}
