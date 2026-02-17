import React, { useState } from 'react';
import kapitalLogo from '../../assets/img/heroSection/Logo.png';
import { LinkComponent } from './LinkComponent';
import { GRL_STYLES } from '../../styles/generalStyles';
import { Link } from 'react-router-dom';
import { type linkProps } from '../../types/grlInterfaces';

export const NavBarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const LINKSLIST: linkProps[] = [
    {lnk: '/', name: 'Inicio'},
    {lnk: '/mortgage', name: 'Hipotecas'},
    {lnk: '/us', name: 'Nosotros'},
    {lnk: '/contact', name: 'Contacto', styles: `${GRL_STYLES.greenBGLink} ${GRL_STYLES.defaulLinkComp}`}
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='flex justify-between items-center mx-4 md:mx-20 h-25 relative'>
      {/* Logo */}
      <div className='flex items-center z-20'>
        <Link to='/'>
          <img className='min-w-40 w-40 md:w-70' src={kapitalLogo} alt="Kapital House" />
        </Link>        
      </div>

      {/* Menu Hamburguesa - Solo mobile */}
      <button 
        className='md:hidden z-20 flex flex-col gap-1.5 w-8'
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Links Desktop */}
      <div className='hidden md:flex gap-10 items-center'>
        {LINKSLIST.map((destiny, key) => (
          <LinkComponent 
            key={key} 
            lnk={destiny.lnk}
            name={destiny.name}
            styles={destiny.styles} 
          />         
        ))}
      </div>

      {/* Menu Mobile */}
      <div className={`
        fixed md:hidden top-0 right-0 h-screen w-1/2 bg-white z-10
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className='flex flex-col gap-8 items-center justify-center h-full'>
          {LINKSLIST.map((destiny, key) => (
            <div key={key} onClick={toggleMenu}>
              <LinkComponent 
                lnk={destiny.lnk}
                name={destiny.name}
                styles={destiny.styles} 
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

