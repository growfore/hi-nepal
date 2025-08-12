import { LucideIcon } from "lucide-react";

export function ServiceCard({icon:Icon, title, description}: {icon: LucideIcon, title: string, description: string}) {
    return (
        <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4'>
                <Icon className='w-10 h-10 text-green-600' />
            </div>
            <h4 className='text-xl font-bold text-dark-blue-900 mb-2'>{title}</h4>
            <p className='text-gray-600 text-sm leading-relaxed'>
                {description}
            </p>
        </div>
    )
}