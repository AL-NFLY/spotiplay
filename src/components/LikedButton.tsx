'use client'

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHeart, IoHeartDislike, IoHeartOutline } from "react-icons/io5";

interface LikedButtonProps {
    songId: string;
}

const LikedButton: React.FC<LikedButtonProps> = ({songId}) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();
  
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (!user?.id) {
      return
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .single();

        if (!error && data) {
          setIsLiked(true)
        }
    }
    fetchData()
  }, [songId, supabaseClient, user?.id])

  const Icon = isLiked ? IoHeart : IoHeartOutline
  const handleLike = () => {
    if (!user) {
      return authModal.onOpen();
    }
      
  }

  return (
    <button 
      onClick={handleLike}
      className="hover:opacity-75 transition"
    >
      <Icon 
        color={isLiked ? '#22c55e' : 'white'}
        size ={22}
      />
    </button>
  )
}

export default LikedButton