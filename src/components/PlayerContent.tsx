'use client'

import { BsPlay, BsPlayFill } from "react-icons/bs";
import { Song } from "../../types"
import LikedButton from "./LikedButton";
import MediaItem from "./MediaItem";
import { IoIosSkipBackward, IoIosSkipForward, IoMdPause, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { IoBackspace } from "react-icons/io5";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
  const Icon = true ? IoMdPause : BsPlay
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
            <div className="flex gap-x-4">
                <MediaItem 
                    data={song}
                />
                <LikedButton
                    songId={song.id}
                />
            </div>
        </div>

            {/* Mobile View for Pause/Play Button */}
            <div className="flex md:hidden col-auto w-full justify-end items-center">
                <div
                    onClick={() => {}}
                    className="flex h-9 w-9 items-center justify-center rounded-full p-1 cursor-pointer bg-white"
                >
                    <Icon className="text-black w-5 h-auto"/>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden w-full h-full max-w-screen-md gap-x-6 md:flex justify-center items-center">
                <IoIosSkipBackward 
                    onClick={() => {}}
                    className="w-6 h-auto text-neutral-400 hover:text-white cursor-pointer transition"
                />

                <div
                    onClick={() => {}} 
                    className="flex items-center justify-center rounded-full h-9 w-9 bg-white"
                >
                    <Icon className="text-black w-5 h-auto"/>
                </div>

                <IoIosSkipForward 
                    onClick={() => {}}
                    className="w-6 h-auto text-neutral-400 hover:text-white cursor-pointer items-center transition"
                />
            </div>
    </div>
  )
}

export default PlayerContent