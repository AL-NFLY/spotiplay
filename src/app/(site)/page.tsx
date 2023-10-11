import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-neutral-900 h-full w-full rounded-md overflow-hidden overflow-y-auto'>
      {/* <h1 className=''>
        Welcome Back to <span className='text-green-500'>Spotiplay</span>
      </h1> */}
      <Header>
      <h2 className='text-2xl md:text-3xl font-semibold'>
        Welcome back!
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mt-4 gap-3'>
        <ListItem 
          image='/images/liked.png'
          name='Liked songs'
          href='liked'
          />
      </div>
      </Header>

      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl md:text-2xl font-semibold'>Newest Songs</h2>
        </div>
        <div>
          <p>List of Songs</p>
        </div>
      </div>

    </main>
  )
}
