'use client'

import React from 'react'
import { Song } from '../../types'
import SongItem from './SongItem';

interface PageContentProps {
    songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({songs}) => {
  if(songs.length === 0) {
    return (
        <p className='mt-4 text-neutral-400'>
            No songs available
        </p>
    )
  }
  
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4 gap-4'>
        {songs.map((item) => (
            <SongItem
                key={item.id}
                onClick={() => {}}
                data={item}
            />
        ))}
    </div>
  )
}

export default PageContent

