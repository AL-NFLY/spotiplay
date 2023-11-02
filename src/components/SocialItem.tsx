import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

interface SocialItemProps {
    href: string;
    icon: IconType;
    id: string;
    at: string;
    alt: string;
}

const socials: SocialItemProps[] = [
  {
      href: 'https://github.com/AL-NFLY',
      icon: IoLogoGithub,
      id: 'Github',
      at: 'github/AL-NFLY',
      alt: 'Github Logo',
  },
  {
      href: 'https://www.linkedin.com/in/almer-naufaly/',
      icon: IoLogoLinkedin,
      id: 'LinkedIn',
      at: 'linkedin/almer-naufaly',
      alt: 'linkedIn logo',
  },
  {
      href: 'mailto://almer.nfly@gmail.com',
      icon: IoMail,
      id: 'Email',
      at: 'almer.nfly@gmail.com',
      alt: 'email logo',
  },
]
const SocialItem = () => {
  return (
    <ul className='mt-2'>
        {socials.map((social) => (
            <li 
                key={social.id}
            >
                <Link
                    href={social.href}
                    target='_blank'
                    className='flex items-center gap-x-3 hover:bg-neutral-800/50 w-full p-2 rounded-md'
                >
                    <div>
                        <social.icon className='w-10 h-auto' />
                    </div>
                    <div className='flex flex-col overflow-hidden gap-y-0.5 font-medium'>
                        <p className='truncate'>{social.id}</p>
                        <p className='text-xs text-neutral-400 truncate'>{social.at}</p>
                    </div>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default SocialItem