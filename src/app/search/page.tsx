import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title) 
  return (
    <section className="h-full w-full rounded-md overflow-y-auto overflow-hidden bg-neutral-900">
        <Header className="from-neutral-700/50">
            <div className="flex flex-col gap-y-6 mb-2">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Search
                </h2>
                <SearchInput />
            </div>
        </Header>
    </section>
  )
}

export default Search