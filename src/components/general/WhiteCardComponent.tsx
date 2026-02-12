import React from 'react'
import { type cardData } from '../../types/grlInterfaces'

export const WhiteCardComponent: React.FC<cardData> = ({ img, title, text }) => {
  return (
    <div className='max-w-72 flex flex-col justify-center items-center rounded-3xl text-center border-2 border-kapital-lightgrey m-1 gap-3 p-5' >
        <img className='w-20 h-auto' src={img} alt={title} />
        <p className='text-2xl font-bold' >{title}</p>
        <p className='text-base ' >{text}</p>
    </div>
  )
}
