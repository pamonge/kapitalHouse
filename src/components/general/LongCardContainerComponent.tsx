import React from 'react'
import { type cardContainerData } from '../../types/grlInterfaces'
import { LongCardComponent } from './LongCardComponent'
import { SlideIn } from 'react-animate-components-ts'

export const LongCardContainerComponent: React.FC<cardContainerData> = ({ cardDataProp }) => {
  return (
    <div className='flex flex-col gap-10 w-full' >
        {
            cardDataProp.map(( data, key ) => (
                <SlideIn key={key} from='left' left={300} type='tween' duration={0.7} delay={key * 0.8} revealInView={true} animateOnce={true}>
                    <LongCardComponent
                        img={data.img}
                        title={data.title}
                    />
                </SlideIn> 
            ))
        } 
    </div>
  )
}
