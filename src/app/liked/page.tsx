import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <section className="rounded-md bg-neutral-900 h-full w-full overflow-hidden overflow-y-auto">
        <Header className="from-violet-500">
            <>
                <div className="flex flex-col md:flex-row items-center gap-x-5">
                    <div className="relative h-48 w-48 lg:h-52 lg:w-52">
                        <Image 
                            src='/images/liked.png'
                            alt="Playlist"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                        <p className="hidden md:block">Playlist</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl  font-bold">Liked Songs</h2>
                    </div>
                </div>
            </>
        </Header>
    </section>
  )
}

export default Liked