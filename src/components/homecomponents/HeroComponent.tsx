import React from 'react';
import subtract from '../../assets/img/heroSection/subtract.png';
import btnWhatsapp from '../../assets/img/heroSection/btnWhatsapp.png';
import btnWhatsappXS from '../../assets/icons/btnWhatsappXS.png'
import logo from '../../assets/img/heroSection/Logo.png';
import { LinkComponent } from '../navigation/LinkComponent';
import { GRL_STYLES } from '../../styles/generalStyles';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const HeroComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    }
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); 

  },[])

  return (
    <div className='relative w-full h-screen bg-cover bg-no-repeat opacity-95' style={{ backgroundImage: `linear-gradient(350deg, rgba(255, 255, 255, 0.5) 20.97%, rgba(24, 64, 100, 0.7) 47.74%), url(${subtract})` }}>
      <div className='flex flex-col h-screen gap-30 px-3 lg:px-20 justify-center bg-he '>
        <div className='w-full flex flex-col  gap-10 xl:max-w-1/2 ' >
            <p className='text-white text-6xl max-lg:text-3xl font-bold'>
                La mejor hipoteca para tu nuevo hogar
            </p>
            <p className='text-white text-4xl max-lg:text-xl'>
                Te acompañamos en cada paso
            </p>
            <div>
              <LinkComponent lnk='/contact' name='¡Contáctanos!' styles={`${GRL_STYLES.greenBGLink} ${GRL_STYLES.defaulLinkComp} `} />  
            </div>
            
        </div>
        <div className='flex justify-between gap-10'>
              <NavLink to={'https://wa.me/34631203721'} target='_blank'>                
                <img 
                  alt="Whatsapp" 
                  src={
                    isMobile ? btnWhatsappXS : btnWhatsapp
                  }  />
              </NavLink>
              <img className='max-lg:w-50' src={logo} alt="Kapital House" />
        </div>
      </div>   
    </div>
  )
}

