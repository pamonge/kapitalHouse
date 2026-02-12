import React from 'react'
import backGroundLogo from '../../assets/home/backGroundLogo.png'
import { LongCardContainerComponent } from '../general/LongCardContainerComponent'
import { longCardData } from '../../data/grlData'
import { LinkComponent } from '../navigation/LinkComponent'
import { GRL_STYLES } from '../../styles/generalStyles'

export const OurServicesComponent: React.FC = () => {
  return (
    <div className='flex flex-col gap-20 bg-right bg-no-repeat justify-center py-15' style={{ backgroundImage: `url(${backGroundLogo})` }} >
        <p className='text-center text-5xl font-extrabold ' >Nuestros servicios incluyen</p>
        <div className='flex max-lg:flex-col justify-around w-full ' >
          <div className='w-1/2'>
            <LongCardContainerComponent cardDataProp={longCardData} />
          </div>
          <div className='flex flex-col justify-center items-center gap-15' >
            <p className='text-4xl font-bold text-kapital-lightbue ' >¡y mucho más!</p>
            <LinkComponent 
              lnk='/contact'
              name='¡Contáctanos!'
              styles={`${GRL_STYLES.defaulLinkComp} bg-kapital-blue rounded-xl text-kapital-white  `}
            />
          </div>
        </div>
    </div>
  )
}
