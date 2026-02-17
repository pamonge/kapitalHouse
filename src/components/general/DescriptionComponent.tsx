import React from 'react'
import { type descriptionData } from '../../types/grlInterfaces'

export const DescriptionComponent: React.FC<descriptionData> = ({ title, leftSide, rightSide }) => {
  return (
    <div className='flex flex-col gap-10 lg:gap-20 justify-center items-center'>
        <p className='lg:text-5xl text-2xl font-bold text-center' >{title}</p>
        <div className='flex max-lg:flex-col p-5 gap-10 ' >
            <div className='w-full flex flex-col justify-center'>
                {leftSide}
            </div>
            <div className='w-full flex flex-col justify-center '>
                {rightSide}
            </div>
        </div>
    </div>
  )
}
