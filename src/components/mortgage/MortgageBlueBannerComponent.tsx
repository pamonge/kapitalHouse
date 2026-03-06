import React from 'react'
import { BlueBannerComponent } from '../general/BlueBannerComponent'
import { Link } from 'react-router-dom'

export const MortgageBlueBannerComponent: React.FC = () => {
  return (
    <div>
        <BlueBannerComponent 
            content={
                <div className='flex flex-col text-center gap-5'>
                    <p className='lg:text-2xl font-bold'>¡Hipotecas hasta el 100% del valor de la vivienda!</p>
                    <p className='lg:text-xl' >Estudiamos tu caso y buscamos la mejor opción para ti.</p>
                    <p className='lg:text-xl' >Accede al <strong>Simulador de Hipotecas</strong> luego de enviarnos tu consulta.</p>
                </div>   
            }
            lnkComponent={
                <Link 
                    to="/contact" 
                    className="inline-block px-6 py-3 bg-kapital-green text-black font-bold rounded-xl hover:scale-105 transition transform"
                >
                    Contactar
                </Link>
            }
        />
    </div>
  )
}
