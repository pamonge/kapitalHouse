import React from 'react'
import { CreditSecurityComponent } from './CreditSecurityComponent'
import { BlueBannerComponent } from '../general/BlueBannerComponent'
import { LinkComponent } from '../navigation/LinkComponent'
import { GRL_STYLES } from '../../styles/generalStyles'

export const HomeContainerComponet: React.FC = () => {
  return (
    <div className='container ' >
        <CreditSecurityComponent />
        <BlueBannerComponent 
            content={
                <div className='flex flex-col gap-3 text-kapital-white text-3xl '>
                    <p>
                        ¿Quieres comprar una vivienda y necesitas financiación?
                    </p>
                    <p>
                        En Kapital House te ayudamos a encontrar la hipoteca adecuada.
                    </p>
                </div>
            }
            lnkComponent={
                <LinkComponent 
                    lnk='/contact'
                    name='¡Contáctanos!'
                    styles={`${GRL_STYLES.greenBGLink} ${GRL_STYLES.defaulLinkComp}`}/>
            }
        />
    </div>
  )
}
