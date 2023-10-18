import React from 'react'
import { IoPlay } from 'react-icons/io5'

const PlayButton = () => {
  return (
    <div className='flex items-center rounded-full p-2 drop-shadow-md opacity-0 group-hover:opacity-100 hover:scale-110 bg-green-500 transition translate translate-y-1/4 group-hover:translate-y-0'>
        <IoPlay 
            className="text-black w-6 h-auto" 
        />
    </div>
  )
}

export default PlayButton