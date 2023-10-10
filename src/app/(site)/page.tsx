import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-neutral-900 h-full w-full rounded-md overflow-hidden overflow-y-auto'>
      {/* <h1 className=''>
        Welcome Back to <span className='text-green-500'>Spotiplay</span>
      </h1> */}
      <Header>
      <h2 className=''>Header</h2>
      </Header>

    </main>
  )
}
