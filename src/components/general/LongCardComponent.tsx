import React from 'react'
import { type cardData } from '../../types/grlInterfaces'

export const LongCardComponent: React.FC<cardData> = ({ img, title }) => {
  return (
    <div className='flex justify-center items-center gap-10 p-5 img-shadow-drop-blue border-2 border-kapital-lightgrey rounded-3xl bg-white w-full' >
        <img className='w-20 h-auto' src={img} alt={title} />
        <p className='text-2xl font-bold'>{title}</p>
    </div>
  )
}
