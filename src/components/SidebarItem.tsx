import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    href: string;
    active?: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = ({icon: Icon, href, label, active}) => {
  return (
    <Link 
        href={href}
        className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
            active && "text-white"
        )}
    >
        <Icon size={30}/>
        <p className="w-full truncate">{label}</p>
    </Link>
  )
}

export default SidebarItem