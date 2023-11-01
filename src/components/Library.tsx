'use client'

import useAuthModal from "@/hooks/useAuthModal"
import useUploadModal from "@/hooks/useUploadModal"
import { useUser } from "@/hooks/useUser"
import { IoAdd, IoAlbums } from "react-icons/io5"
import { Song } from "../../types"
import MediaItem from "./MediaItem"
import useOnPlay from "@/hooks/useOnPlay"

interface LibraryProps {
    songs: Song[]
}

const Library:React.FC<LibraryProps> = ({songs}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();
    const onPlay = useOnPlay(songs);

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
                <div className="inline-flex items-center gap-x-2 text-neutral-400">
                    <IoAlbums size={20}/>
                    <p className="font-medium px-3">
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
                <ul>
                    {songs.map((item) => (
                        <MediaItem
                            onClick={onPlay}
                            key={item.id}
                            data={item} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Library