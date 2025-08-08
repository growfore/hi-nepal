import { LucideIcon } from "lucide-react";

type TDataIconProps = {
    icon: LucideIcon,
    k?: string
    v?: string
    size?: number
    color?: string
}
export function DataIcon({ icon: Icon, k, v, size, color }: TDataIconProps) {
    return (

        <div>
            <div className='bg-green-900 w-fit rounded-full p-2' style={{ backgroundColor: color }}>
                <Icon size={size} color="white" />
            </div>
            <div>
                <h5 className="font-bold">{k}</h5>
                <p>{v}</p>
            </div>
        </div>
    );
}