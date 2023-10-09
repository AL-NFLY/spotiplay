'use client'

import { IoAdd, IoAlbums } from "react-icons/io5"

const Library = () => {
    const onClick = () => {
        //Upload Handling

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
        </div>
    )
}

export default Library