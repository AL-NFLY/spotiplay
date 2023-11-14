'use client'

import { useState } from "react";
import { BsPlay, BsVolumeDown, BsVolumeMute, BsVolumeMuteFill } from "react-icons/bs";
import { IoIosSkipBackward, IoIosSkipForward, IoMdPause, IoMdPlay, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import usePlayer from "@/hooks/usePlayer";
import useSound from "use-sound"
import { useEffect } from "react";

import * as types from "@/types"
import LikedButton from "./LikedButton";
import MediaItem from "./MediaItem";
import Slider from "./Slider";
import { IoPlay } from "react-icons/io5";

interface PlayerContentProps {
    song: types.Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);    

  const Icon = isPlaying ? IoMdPause : IoPlay;
  const VolumeIcon = volume === 0 ? HiOutlineVolumeOff : HiOutlineVolumeUp;

  const onPlayNext = () => {
    if (player.ids.length === 0) {
        return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    // if there's no next song left, throw back to 1st song
    if (!nextSong) {
        return player.setId(player.ids[0]);
    }
    player.setId(nextSong)
  }

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
        return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    // if there's no previous song left, throw back to n-th last song
    if (!previousSong) {
        return player.setId(player.ids[player.ids.length - 1]);
    }
    player.setId(previousSong)
  }

  const [play, { pause, sound }] = useSound(
    songUrl,
    { 
        volume: volume,
        onplay: () => setIsPlaying(true),
        onend: () => {
            setIsPlaying(false);
            onPlayNext();
        },
        onpause: () => setIsPlaying(false),
        format: ['mp3'],
    }
  );

  useEffect(() => {
    sound?.play();
    return () => {
        sound?.unload()
    }
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
        play();
    }
    else {
        pause();
    }
  } 

  const toggleMute = () => {
    if (volume === 0) {
        setVolume(1);
    } 
    else {
        setVolume(0);
    }
  }


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
        <div className="flex md:hidden col-auto w-full justify-end items-center gap-x-4 pr-1">
            <IoIosSkipBackward
                onClick={onPlayPrevious}
                className="w-5 h-auto hover:text-neutral-400"
            />

            <div
                onClick={handlePlay}
                className="flex h-9 w-9 items-center justify-center rounded-full p-1 cursor-pointer active:bg-neutral-800"
            >
                <Icon className="w-6 h-auto"/>
            </div>

            <IoIosSkipForward
                onClick={onPlayNext}
                className="w-5   h-auto active:text-neutral-400"
            />
        </div>

        {/* Desktop View */}
        <div className="hidden w-full h-full max-w-screen-md gap-x-6 md:flex justify-center items-center">
            <IoIosSkipBackward 
                onClick={onPlayPrevious}
                className="w-6 h-auto text-neutral-400 hover:text-white cursor-pointer transition"
            />

            <div
                onClick={handlePlay} 
                className="flex items-center justify-center rounded-full h-9 w-9 bg-white hover:scale-105 transition"
            >
                <Icon className="text-black w-6 h-auto"/>
            </div>

            <IoIosSkipForward 
                onClick={onPlayNext}
                className="w-6 h-auto text-neutral-400 hover:text-white cursor-pointer items-center transition"
            />
        </div>

        <div className="hidden md:flex w-full justify-end">
            <div className="flex items-center w-32 gap-x-2">
                <VolumeIcon 
                    onClick={toggleMute}
                    className="w-7 h-auto text-neutral-400 hover:text-white cursor-pointer"
                />

                <Slider 
                    value={volume}
                    onChange={(value) => setVolume(value)}
                />
            </div>
        </div>

    </div>
  )
}

export default PlayerContent