'use client'

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types"
import Image from "next/image";
import PlayButton from "./PlayButton";
    
interface SongItemProps {
    data: Song;
    onClick: (id: string) => void
};

const SongItem: React.FC<SongItemProps> = ({data, onClick}) => {
  const imagePath = useLoadImage(data);

  return (
    <div
        onClick={() => onClick(data.id)}
        className="relative group flex flex-col items-center justify-center rounded-md p-4 gap-x-4 overflow-hidden cursor-pointer bg-neutral-400/5 hover:bg-neutral-400/10 transition"
    >
        <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
            <Image 
                className="object-cover"
                src={imagePath || '/images/liked.png'}
                fill
                alt="Image"
            />
        </div>

        <div className="mt-4 flex flex-col w-full">
            <p className="w-full font-semibold truncate">{data.title}</p>
            <p className="w-full pb-4 text-neutral-400 text-sm truncate">{data.author}</p>
        </div>

        <div className="absolute right-6 bottom-[6.5rem]">
            <PlayButton />
        </div>
    </div>
  )
}

export default SongItem