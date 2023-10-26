import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title) 
  return (
    <section className="h-full w-full rounded-md overflow-y-auto overflow-hidden bg-neutral-900">
        <Header className="from-neutral-700/50">
            <div className="flex flex-col gap-y-6">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Search
                </h2>
                <SearchInput />
            </div>
        </Header>
        <SearchContent songs={songs} />
    </section>
  )
}

export default Search