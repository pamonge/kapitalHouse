import React from 'react'
import { BlueBannerComponent } from '../general/BlueBannerComponent'

export const MortgageBlueBannerComponent: React.FC = () => {
  return (
    <div>
        <BlueBannerComponent 
            content={
                <div className='flex flex-col text-center gap-5'>
                    <p className='text-2xl font-bold'>¡Hipotecas hasta el 100% del valor de la vivienda!</p>
                    <p className='text-xl' >Estudiamos tu caso y buscamos la mejor opción para ti.</p>
                </div>   
            }
        />
    </div>
  )
}
