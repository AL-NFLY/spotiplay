'use client'

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "../../types"
import Image from "next/image";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void
};

const SongItem: React.FC<SongItemProps> = ({data, onClick}) => {
  const imagePath = useLoadImage(data);

  return (
    <div
        onClick={() => onClick(data.id)}
        className="relative group flex flex-col items-center justify-center rounded-md p-3 gap-x-4 overflow-hidden cursor-pointer bg-neutral-400/5 hover:bg-neutral-400/10 transition"
    >
        <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
            <Image 
                className="object-cover"
                src={imagePath || '/images/liked.png'}
                fill
                alt="Image"
            />
        </div>
    </div>
  )
}

export default SongItem