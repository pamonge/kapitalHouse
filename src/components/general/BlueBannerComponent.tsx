import React from 'react'

interface blueBannerProps {
    content: React.ReactNode;
    lnkComponent?: React.ReactNode;
}

export const BlueBannerComponent: React.FC<blueBannerProps> = ({ content, lnkComponent }) => {
  return (
    <div className='py-20 text-kapital-white'>
        <div className='flex flex-col bg-kapital-blue p-13 text-center  gap-10 rounded-2xl font-bold'>
            <div>
                { content }
            </div>            
            <div>
                { lnkComponent }
            </div>
            
        </div>
    </div>

  )
}
