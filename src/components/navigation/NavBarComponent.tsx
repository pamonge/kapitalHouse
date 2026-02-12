import React from 'react';
import kapitalLogo from '../../assets/img/heroSection/Logo.png';
import { LinkComponent } from './LinkComponent';
import { GRL_STYLES } from '../../styles/generalStyles';
import { Link } from 'react-router-dom';
import { type linkProps } from '../../types/grlInterfaces';

export const NavBarComponent: React.FC = () => {
  const LINKSLIST: linkProps[] = [
    {lnk: '/', name: 'Inicio'},
    {lnk: '/mortgage', name: 'Hipotecas'},
    {lnk: '/us', name: 'Nosotros'},
    {lnk: '/contact', name: 'Contacto', styles: `${GRL_STYLES.greenBGLink} ${GRL_STYLES.defaulLinkComp}`}
  ];

  return (
    <div className='flex justify-between mx-20 h-25' >
      <div className='flex items-center '>
        <Link to='/'>
          <img className='w-70 ' src={kapitalLogo} alt="Kapital House" />
        </Link>        
      </div>
      <div className='flex gap-10 items-center'>
        {
          LINKSLIST.map((destiny, key) => (
            <LinkComponent 
              key={key} 
              lnk={destiny.lnk}
              name={destiny.name}
              styles={destiny.styles} 
            />         
            ))
        }

      </div>
    </div>
  )
}
