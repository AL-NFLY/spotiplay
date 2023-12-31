'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header"
import MediaItem from "@/components/MediaItem"
import SocialItem from "@/components/SocialItem";
import Image from "next/image"
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full h-full rounded-md bg-neutral-900 overflow-hidden overflow-y-auto">
        <Header>
            <>
                <div className="flex flex-col md:flex-row gap-x-5 md:items-center">
                    <div className="relative h-48 w-48 lg:h-52 lg:w-52 max-sm:m-auto">
                        <Image
                            src='/images/profile.jpg'
                            alt='Almer'
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col md:gap-y-2 mt-4 md:mt-0 ">
                        <p>Hi there!</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">I&apos;m Almer Naufaly</h2>
                    </div>
                </div>

            </>
        </Header>
        <section className="px-6">
            <div className="md:pr-40 space-y-2 leading-relaxed">
                <p>
                A programmer with a background of Computer Engineering from Institut Teknologi Sepuluh Nopember with almost a year of internship experience as software developer.

                </p>
                <p>
                I&apos;m well-versed in Web Development, Cloud Engineering, and Network Engineering. Currently, my comfort language is Python, but these days I often use Typescript more to keep up with the latest technology in web development.
                </p>
                <p>
                If you would love to talk to me, about programming or non-programming related questions, feel free to reach me out on:

                </p>
            </div>

            <SocialItem />

        </section>

        <Footer />

    </section>
  )
}

export default page