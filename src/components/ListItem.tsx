"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoPlay } from "react-icons/io5";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({image, name, href}) => {
    const router = useRouter();
    const onClick = () => {
        //Push for authentication
        router.push(href);
    }
    return (
        <button
        className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
        >
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image 
                    className="object-cover"
                    src={image}
                    alt="Image"
                    fill
                />
            </div>
            <p className="py-5 font-medium truncate">
                {name}
            </p>
            <div className="absolute flex items-center justify-center p-2 right-5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 hover:scale-105 drop-shadow-md transition">
                <IoPlay className="text-black" size={20}/>
            </div>

        </button>
    )
}

export default ListItem