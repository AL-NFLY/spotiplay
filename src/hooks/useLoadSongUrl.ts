import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { Song } from "@/types";

const useLoadSongUrl = (song: Song) => {
//   non-auth users can play/see songs; change to useSessionContext() for auth users only
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return '';
  }

  const { data: songData } = supabaseClient
    .storage
    .from('songs')
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl