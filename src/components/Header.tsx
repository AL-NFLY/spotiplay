'use client'

import { useRouter } from "next/navigation"
import { IoChevronBack, IoChevronForward, IoHome, IoSearch } from "react-icons/io5"
import { twMerge } from "tailwind-merge"
import Button from "./Button"


interface HeaderProps {
    children: React.ReactNode
    className?: string
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
    const router = useRouter();
    const handleLogout = () => {
        // Logout Handling
    }
    return (
        <div className={twMerge(`
            h-fit bg-gradient-to-b from-emerald-800 p-6
            `, className
        )}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button 
                        onClick={() => router.back()} 
                        className="rounded-full bg-neutral-900 flex text-center justify-center hover:opacity-80 transition p-1">
                        <IoChevronBack size={25} className="text-white" 
                    />
                    </button>
                    <button 
                        onClick={() => router.forward}
                        className="rounded-full bg-neutral-900 flex text-center justify-center hover:opacity-80 transition p-1">
                        <IoChevronForward size={25} className="text-white" 
                    />
                    </button>
                </div>

                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="flex items-center justify-center rounded-full p-2 bg-neutral-900 hover:opacity-80  transition">
                        <IoHome size={20} className="text-white"/>
                    </button>
                    <button className="flex items-center justify-center rounded-full p-2 bg-neutral-900 hover:opacity-80  transition">
                        <IoSearch size={20} className="text-white"/>
                    </button>
                </div>

                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <Button className="bg-transparent text-neutral-300 font-semibold">Sign up</Button>
                        <Button className="bg-white text-black font-semibold px-6">Log in</Button>
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header