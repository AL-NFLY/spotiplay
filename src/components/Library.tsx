'use client'

import useAuthModal from "@/hooks/useAuthModal"
import useUploadModal from "@/hooks/useUploadModal "
import { useUser } from "@/hooks/useUser"
import Image from "next/image"
import { IoAdd, IoAlbums } from "react-icons/io5"

const Library = () => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();
    const onClick = () => {
        if(!user) {
            return authModal.onOpen();
        }
        // TODO: Check for subscription
        return uploadModal.onOpen();
    }
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <IoAlbums size={20}/>
                    <p className="text-neutral-400 font-medium px-3">
                        Your Library
                    </p>
                </div>
                <IoAdd
                    onClick={onClick}
                    size={20}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of songs
            </div>
        </div>
    )
}

export default Library