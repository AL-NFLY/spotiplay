import Header from "@/components/Header"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full h-full rounded-md bg-neutral-900 overflow-hidden overflow-y-auto">
        <Header>
            <>
                <div className="flex flex-col md:flex-row items-center gap-x-5">
                    <div className="relative h-48 w-48 lg:h-52 lg:w-52">
                        <Image
                            src='/images/profile.jpg'
                            alt='Almer'
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col md:gap-y-2 mt-4 md:mt-0">
                        <p>Hi there!</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">I&apos;m Almer</h2>
                    </div>
                </div>
            </>
        </Header>


    </div>
  )
}

export default page