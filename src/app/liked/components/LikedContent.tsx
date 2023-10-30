'use client'

import { useRouter } from "next/navigation";
import { Song } from "../../../../types"
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import MediaItem from "@/components/MediaItem";
import LikedButton from "@/components/LikedButton";
import useAuthModal from "@/hooks/useAuthModal";

interface LikedContentProps {
    songs: Song[];
}


const LikedContent: React.FC<LikedContentProps> = ({songs}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const authModal = useAuthModal();

  useEffect(() => {
    // throw non-auth users back to home
    if (!isLoading && !user) {
        // router.replace('/')
        return authModal.onOpen();
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
        <div className="flex flex-col gap-y-2 px-6 h-1/2 items-center justify-center">
            <p className="text-2xl font-semibold">No liked songs found</p>
            <p className="text-sm">Feel free to start liking your favorite songs.</p>
        </div>
    )
  }
  
  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
        {songs.map((song) => (
            <div 
                key={song.id}
                className="flex items-center gap-x-4 w-full"
            >
                <div className="flex-1">
                    <MediaItem 
                        onClick={() => {}}
                        data={song}
                    />
                </div>
                <LikedButton songId={song.id}/>
            </div>
        ))}
    </div>
  )
}

export default LikedContent