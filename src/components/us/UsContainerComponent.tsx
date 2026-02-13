import React from 'react'
import { DescriptionComponent } from '../general/DescriptionComponent'
import twoManLaptop from '../../assets/us/twoManLaptop.png'
import { BlueBannerComponent } from '../general/BlueBannerComponent'
import { ActingIndependentComponent } from './ActingIndependentComponent'

export const UsContainerComponent: React.FC = () => {
  return (
    <div >
        <div className='container '>
            <DescriptionComponent 
                title='Personas que entienden tus objetivos'
                leftSide={
                    <div className='flex flex-col gap-5 '>
                        <p className='text-3xl font-bold' >
                            Te acompañamos en cada paso para que tomes la mejor decisión financiera.
                        </p>
                        <p className='text-xl leading-15' >
                            En <strong>Kapital House</strong> trabajamos para simplificar uno de los procesos más importantes de tu vida. <strong>Analizamos tu situación, estudiamos el mercado y negociamos con las entidades financieras</strong> para ofrecerte opciones <strong>claras</strong>, <strong>transparentes</strong> y adaptadas a tus <strong>necesidades</strong>.
                        </p>
                    </div>
                }
                rightSide={
                    <img className='img-shadow-drop-left' src={twoManLaptop} alt='/imagen de nosotros' />
                }
            />

            <BlueBannerComponent 
                content={
                    <p className='text-2xl' >
                        Nuestra experiencia nos permite anticiparnos a posibles obstáculos y ahorrarte tiempo, gestiones innecesarias y visitas a múltiples bancos. 
                    </p>
                }        
            />
        </div>
        
        <ActingIndependentComponent />

    </div>
  )
}
