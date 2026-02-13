import React from 'react'
import { FormComponent } from './FormComponent'

export const ContactContainerComponent: React.FC = () => {
  return (
    <div className='flex max-md:flex-col bg-kapital-gradientform rounded-t-[5rem] px-15 py-25 justify-between relative z-10'>
        <div className='flex flex-col gap-10 lg:w-1/2 text-kapital-white'>
            <div className='flex flex-col gap-3 text-5xl font-bold '>
                <p>
                    Comprar tu casa no tiene por qué ser complicado. 
                </p>
                <p className='text-kapital-green '>
                    ¡Estamos para ayudarte!
                </p>
            </div>
            <div>
                <p className='text-3xl'>
                    Completa el formulario y te informaremos sin compromiso.
                </p>
            </div>
        </div>
        <div className='flex justify-center lg:w-1/2' >
            <FormComponent />
        </div>
    </div>
  )
}
