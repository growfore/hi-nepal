import Link from "next/link";

export default function HLinkComp({
  href,
  text,
  comma,
}: {
  href: string;
  text: string;
  comma?: boolean;
}) {
  return (
    <span>
      {" "}
      <Link href={href} className="text-green-700 underline">
        {text}
      </Link>
      {comma && ","}{" "}
    </span>
  );
}
