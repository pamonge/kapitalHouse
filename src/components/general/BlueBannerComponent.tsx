import React from 'react'
import { type blueBannerProps } from '../../types/grlInterfaces';

export const BlueBannerComponent: React.FC<blueBannerProps> = ({ content, lnkComponent }) => {
  return (
    <div className='text-kapital-white'>
        <div className='flex flex-col bg-kapital-blue p-13 text-center  gap-10 rounded-2xl font-bold'>
            <div>
                { content }
            </div>
            {
              lnkComponent ? 
                <div>
                  { lnkComponent }
                </div>
              : ''
            }            
            
            
        </div>
    </div>

  )
}
