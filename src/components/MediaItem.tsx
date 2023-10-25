'use client'

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "../../types"
import Image from "next/image";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({data, onClick}) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
        return onClick(data.id)
    }

    // TODO: Default turn on player

  } 
  return (
    <li
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || '/images/liked.png'}
          alt='Media item'
          fill
          className='object-cover'
        />
      </div>
      <div className="flex flex-col overflow-hidden gap-y-0.5 font-medium">
        <p className="truncate">{data.title}</p>
        <p className="text-xs text-neutral-400 truncate">{data.author}</p>
      </div>
    </li>
  )
}

export default MediaItem