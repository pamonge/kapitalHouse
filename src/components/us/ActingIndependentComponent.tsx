import React from 'react'
import comoActuamos from '../../assets/us/comoActuamos.png'

export const ActingIndependentComponent: React.FC = () => {
  return (
    <div className='flex w-full h-200 justify-center items-center -mb-20 z-10 ' style={{ backgroundImage: `url(${comoActuamos})` }} >
        <p className='text-5xl font-bold text-kapital-white text-center w-2/3 ' >
            Actuamos de forma independiente, poniendo siempre tus intereses en primer lugar.
        </p>
    </div>
  )
}
