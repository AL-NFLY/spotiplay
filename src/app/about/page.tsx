'use client'

import Header from "@/components/Header"
import MediaItem from "@/components/MediaItem"
import Image from "next/image"
import Link from "next/link";
import { IconType } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

interface SocialProps {
    href: string;
    icon: IconType;
    id: string;
    alt: string;
}

const socials: SocialProps[] = [
    {
        href: 'https://github.com/AL-NFLY',
        icon: IoLogoGithub,
        id: 'Github',
        alt: 'Github Logo',
    },
    {
        href: 'https://www.linkedin.com/in/almer-naufaly/',
        icon: IoLogoLinkedin,
        id: 'LinkedIn',
        alt: 'linkedIn logo',
      },
      {
        href: 'mailto://almer.nfly@gmail.com',
        icon: IoMail,
        id: 'Email',
        alt: 'email logo',
      },
]

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
        <section className="px-6">
            <div className="md:pr-40 space-y-2 leading-relaxed">
                <p>
                A programmer with a background of Computer Engineering from Institut Teknologi Sepuluh Nopember with almost a year of internship experience as software developer.

                </p>
                <p>
                I'm well-versed in Web Development, Cloud Engineering, and Network Engineering. Currently, my comfort language is Python, but these days I'm more often use Typescript to keep up with the latest technology in web development.
                </p>
                <p>
                If you would love to talk to me, about programming or non-programming related questions, feel free to reach me out on:

                </p>
            </div>

            <ul className="flex flex-col space-y-2">
                {socials.map((social) => (
                    <li>
                        <Link
                            href={social.href}
                            target="_blank"
                        >
                            <social.icon
                                className="w-9 h-auto"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>

    </div>
  )
}

export default page