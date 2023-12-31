'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoHome, IoPerson, IoSearch } from "react-icons/io5";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
    children: React.ReactNode;
    songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({children, songs}) => {
    const pathname = usePathname();
    const player = usePlayer();
    const routes = useMemo(() => [
        {
            icon: IoHome,
            label: 'Home',
            active: pathname === '/',
            href: '/',
        },
        {
            icon: IoSearch,
            label: 'Search',
            active: pathname === '/search',
            href: 'search',
        },
        {
            icon: IoPerson,
            label: 'About',
            active: pathname === '/about',
            href: 'about',
        },
    ], [pathname]);
    return (
        <main className={twMerge(`
            flex h-full
        `, player.activeId && "h-[calc(100%-80px)]"
        )}>
            <aside className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">   
                        {routes.map((item) => (
                            <SidebarItem
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box classname="overflow-y-auto h-full">
                    <Library songs={songs}/>
                </Box>
            </aside>
            <section className="h-full flex-1 overflow-y-auto md:py-2 md:pr-2">
                {children}
            </section>
        </main>
    )
}

export default Sidebar