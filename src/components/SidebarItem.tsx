import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    href: string;
    active?: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = ({icon, href, label, active}) => {
  return (
    <Link 
        href={href}
        className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
            active && "text-white"
        )}
    >
        Test 
    </Link>
  )
}

export default SidebarItem