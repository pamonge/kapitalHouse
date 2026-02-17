import React from 'react'
import { SlideIn, Pop, Grow } from 'react-animate-components-ts'
import { makeItPosibleData } from '../../data/grlData'
import { CardContainerComponent } from '../general/CardContainerComponent'
import { LinkComponent } from '../navigation/LinkComponent'
import { GRL_STYLES } from '../../styles/generalStyles'

export const MakeItPosible: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-15 mt-15'>
        <Pop origin='top' iPop={0.01} duration={0.7} delay={0.2} revealInView={true} animateOnce={false} >
            <p className='text-2xl lg:text-5xl font-bold' >Hacemos posible tu hogar ideal</p>
        </Pop>
        <SlideIn from='left' left={300} duration={0.7} delay={0.2} revealInView={true} animateOnce={false} type='tween' >
            <>
                <CardContainerComponent cardDataProp={makeItPosibleData} />
            </>
        </SlideIn>
        <Grow origin='bottom' iGrow={0.01} duration={0.9} >
            <LinkComponent 
                lnk='/contact'
                name='¡Contáctanos!'
                styles={`${GRL_STYLES.defaulLinkComp} ${GRL_STYLES.greenBGLink}`}
            />
        </Grow>

    </div>
  )
}
