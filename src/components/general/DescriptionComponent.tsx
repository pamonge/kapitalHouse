import React from 'react'
import { type descriptionData } from '../../types/grlInterfaces'

export const DescriptionComponent: React.FC<descriptionData> = ({ title, leftSide, rightSide }) => {
  return (
    <div className='flex flex-col gap-20 justify-center items-center'>
        <p className='text-5xl font-bold text-center' >{title}</p>
        <div className='flex max-lg:flex-col p-5 gap-10 ' >
            <div className='w-full'>
                {leftSide}
            </div>
            <div className='w-full'>
                {rightSide}
            </div>
        </div>
    </div>
  )
}
