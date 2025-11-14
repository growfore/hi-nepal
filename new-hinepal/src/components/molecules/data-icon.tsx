import { LucideIcon } from "lucide-react";

type TDataIconProps = {
  icon: LucideIcon;
  k?: string;
  v?: string;
  size?: number;
  color?: string;
};
export function DataIcon({ icon: Icon, k, v, size }: Readonly<TDataIconProps>) {
  return (
    <>
      <Icon size={size} className="text-green-900 my-2" />
      <h5 className="font-bold">{k}</h5>
      <p>{v}</p>
    </>
  );
}
