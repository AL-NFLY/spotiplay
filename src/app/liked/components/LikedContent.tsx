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

  
  return (
    <div>LikedContent</div>
  )
}

export default LikedContent