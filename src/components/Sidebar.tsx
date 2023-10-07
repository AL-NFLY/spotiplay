'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoMdHome, IoMdSearch } from "react-icons/io";
interface SidebarProps {
    children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: IoMdHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: IoMdSearch,
            label: 'Search',
            active: pathname === '/search',
            href: 'search',
        },
    ], [pathname]);
    return (
        <div className="flex h-full">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                Navigation
            </div>
        </div>
    )
}

export default Sidebar