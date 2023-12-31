import getSongs from '@/actions/getSongs';
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import PageContent from '@/app/(site)/components/PageContent';
import Image from 'next/image'
import Footer from '@/components/Footer';

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  
  return (
    <article className='bg-neutral-900 h-full w-full rounded-md overflow-hidden overflow-y-auto'>
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

      <section className='mt-2 px-6'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl md:text-2xl font-semibold'>Newest Songs</h2>
        </div>
        <PageContent songs={songs}/>
      </section>

      <Footer />
    </article>
  )
}
