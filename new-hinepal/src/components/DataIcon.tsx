import { LucideIcon } from "lucide-react";

type TDataIconProps ={
    icon: LucideIcon,
    k?: string
    v?: string
    size?: number
    color?: string
}
export function DataIcon({ icon: Icon, k, v, size, color}: TDataIconProps) {
    return (

        <div className='data-item'>
            <div className='icon-wrapper' style={{backgroundColor:color}}>
                <Icon size={size}/>
            </div>
            <div className="data-item-details">
            <h5 className="data-item-key">{k}</h5>
            <p className="data-item-value">{v}</p>
            </div>
        </div>
    );
}