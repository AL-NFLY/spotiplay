'use client'

import { useState } from "react";
import { BsPlay, BsVolumeDown, BsVolumeMute, BsVolumeMuteFill } from "react-icons/bs";
import { IoIosSkipBackward, IoIosSkipForward, IoMdPause, IoMdPlay, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import usePlayer from "@/hooks/usePlayer";

import { Song } from "../../types"
import LikedButton from "./LikedButton";
import MediaItem from "./MediaItem";
import Slider from "./Slider";
import { IoPlay } from "react-icons/io5";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);    

  const Icon = isPlaying ? IoMdPause : IoPlay;
  const VolumeIcon = volume === 0 ? HiOutlineVolumeOff : HiOutlineVolumeUp;

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
                <Icon className="text-black w-6 h-auto"/>
            </div>

            <IoIosSkipForward 
                onClick={() => {}}
                className="w-6 h-auto text-neutral-400 hover:text-white cursor-pointer items-center transition"
            />
        </div>

        <div className="hidden md:flex w-full justify-end">
            <div className="flex items-center w-32 gap-x-2">
                <VolumeIcon 
                    onClick={() => {}}
                    className="w-7 h-auto text-neutral-400 hover:text-white` cursor-pointer"
                />

                <Slider />
            </div>
        </div>

    </div>
  )
}

export default PlayerContent