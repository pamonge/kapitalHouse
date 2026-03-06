import React from 'react'
import pem from '../../assets/pem-webservice.png'
import { LinkComponent } from '../navigation/LinkComponent'
import copyRightStyles from '../../styles/CopyRightComponentStyles'


export const CopyRightComponent: React.FC = () => {
  return (
    <div className={copyRightStyles.copyRightContainer}>
        {/* Desarrollador */}
        <div className={copyRightStyles.webDesignerContainer}>
            <img className={copyRightStyles.webDesignerImg} src={pem} alt="PEM web service" />
            <p className={copyRightStyles.webDesignerText}> Desarrollado por PEM - Web Service</p>
        </div>
        <div>
            <p>©2026 Kapital House.  </p>
        </div>
        {/* Aviso legal | Políticas de Privacidad | Cookies */}
        <div className={copyRightStyles.linkContainer}>
            <LinkComponent lnk='/legal' name='Aviso legal' styles='flex items-center hover:underline'/>
            <LinkComponent lnk='/privacypolicy' name='Políticas de Privacidad' styles='flex items-center hover:underline'/>
            <LinkComponent lnk='/cookies' name='Cookies' styles='flex items-center hover:underline'/>
        </div>
    </div>
  )
}
