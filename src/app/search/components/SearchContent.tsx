'use client'

import MediaItem from "@/components/MediaItem";
import { Song } from "../../../../types"
import LikedButton from "@/components/LikedButton";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({songs}) => {
  if (songs.length == 0) {
    return (
        // <p className="flex flex-col items-center gap-y-2 px-6 text-neutral-400">No songs found</p>
        <div className="flex flex-col items-center justify-center h-1/2 px-6">
            <p className="text-2xl font-semibold">No songs found</p>
            <p className="mt-2 text-sm">Please make sure your words are spelled correctly, or use fewer or different keywords.</p>
        </div>
    )
  }
  
  return (
    <div className="flex flex-col gap-y-2 px-6 w-full">
        {songs.map((song) => (
            <div 
                key={song.id}
                className="flex items-center w-full gap-x-4"
            >
                <div className="flex-1">
                    <MediaItem 
                        onClick={() => {}}
                        data={song}
                    />
                </div>

                <LikedButton 
                    songId={song.id}                
                />
            </div>
        ))}
    </div>
  )
}

export default SearchContent