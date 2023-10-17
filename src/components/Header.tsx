'use client'

import { useRouter } from "next/navigation"
import { IoChevronBack, IoChevronForward, IoHome, IoPeople, IoPerson, IoPersonAdd, IoPersonCircle, IoSearch } from "react-icons/io5"
import { twMerge } from "tailwind-merge"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import useAuthModal from "@/hooks/useAuthModal"
import { toast } from "react-hot-toast";

import Button from "./Button"
import {useUser } from "@/hooks/useUser"


interface HeaderProps {
    children: React.ReactNode
    className?: string
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
    const authModal = useAuthModal();
    const router = useRouter(); 
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        // TODO: reset any playing songs
        router.refresh();
        if(error) {
            toast.error(error.message);
        }
        else {
            toast.success('Logged out');
        }
        
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

                <div className="flex justify-between items-center gap-x-3">
                {user ? (
                        <div className="flex items-center gap-x-3">
                            <Button
                                onClick={handleLogout}
                                className="px-6 py-2"
                            >
                                Log out
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                            >
                                <IoPerson className="h-5 w-auto"/>
                            </Button>
                        </div>
                    ): (
                        <>
                            <Button onClick={authModal.onOpen} className="bg-transparent text-neutral-300 hover:text-white">Sign up</Button>
                            <Button onClick={authModal.onOpen} className="px-6">Log in</Button>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header