import React from 'react'
import { WhiteCardComponent } from '../general/WhiteCardComponent'
import { ourProcessData } from '../../data/grlData'

export const OurProcesComponent: React.FC = () => {
  
    return (
        <div className='flex flex-col gap-20 justify-center items-center'>
            <p className='text-xl lg:text-3xl font-bold' >¿Cómo es nuestro proceso?</p>
            <div className='flex max-lg:flex-col justify-evenly' >
                {
                    ourProcessData.map((item, key) => (
                        <WhiteCardComponent 
                            key={key}
                            img={item.img}
                            title={item.title}
                            text={item.text} /> 
                    ))
                }
            </div>
        </div>
    )
}
