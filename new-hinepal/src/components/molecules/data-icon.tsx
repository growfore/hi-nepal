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
    <div className="flex flex-col">
      <Icon size={size} className="text-green-900 my-2" />
      <p className="font-bold">{k}</p>
      <p>{v}</p>
    </div>
  );
}
