import React from 'react'
import { DescriptionComponent } from '../general/DescriptionComponent'
import keysOnStairs from '../../assets/mortgage/keysOnStairs.png'
import { MortgageBlueBannerComponent } from './MortgageBlueBannerComponent'
import { OurProcesComponent } from './OurProcesComponent'

export const MortgageContainerComponent: React.FC = () => {
  return (
    <div className='container' >
        <DescriptionComponent 
            title='El hogar que sueñas, la hipoteca que necesitas.'
            leftSide={
                <img className='img-shadow-drop-right ' src={keysOnStairs} alt='hand holding keys' />
                }
            rightSide={
                <div className='flex flex-col text-justify gap-5'>
                    <p className='text-lg lg:text-3xl font-bold ' >Te asesoramos para que tomes la mejor decisión.</p>
                    <p className='text-sm lg:text-xl' >
                        Cada situación financiera es única. Por eso, en <strong>Kapital House</strong> realizamos un estudio personalizado para identificar las <strong>alternativas hipotecarias que mejor se ajustan a tus necesidades</strong>.
                    </p>
                    <p className='text-sm lg:text-xl' >
                        Nos encargamos de <strong>negociar</strong> con las entidades financieras y de <strong>acompañarte durante todo el proceso</strong>, para que puedas acceder a tu hipoteca con <strong>claridad, respaldo profesional y tranquilidad</strong>.
                    </p>
                </div>
            }
        />
        <MortgageBlueBannerComponent />
        <OurProcesComponent />
    </div>
  )
}
