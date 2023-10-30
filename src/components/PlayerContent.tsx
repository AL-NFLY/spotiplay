'use client'

import { Song } from "../../types"
import LikedButton from "./LikedButton";
import MediaItem from "./MediaItem";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
  return (
    <div className="grid md:grid-cols-3 h-full">
        <div className="flex w-full justify-start">
            PlayerContent
        </div>
    </div>
  )
}

export default PlayerContent