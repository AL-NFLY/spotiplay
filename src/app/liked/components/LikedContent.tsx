'use client'

import { useRouter } from "next/navigation";
import { Song } from "../../../../types"
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";

interface LikedContentProps {
    songs: Song[];
}


const LikedContent: React.FC<LikedContentProps> = ({songs}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    // throw non-auth users back to home
    if (!isLoading && !user) {
        router.replace('/')
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
    <div>LikedContent</div>
  )
}

export default LikedContent