import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import kHImg from '../../assets/img/creditSecurity/KHImage.png'

interface lnkParams {
  lnk: string;
  name: string;
  styles: string;
}

export const CreditSecurityComponent: React.FC = () => {
  const data: lnkParams = {
    lnk: '/us',
    name: 'Conoce más sobre nosotros',
    styles: 'px-5 py-3 font-bold  bg-kapital-blue text-kapital-white rounded-2xl'
  }
  return (
    <div className='flex flex-col gap-20 py-20'>
      <div className='flex flex-col text-5xl font-extrabold text-center gap-3'>
        <h3>La financiación que sueñas con</h3>
        <h3 className='text-kapital-lightbue' >la seguridad que buscas</h3>
      </div>
      <div className='flex max-lg:flex-col gap-7'>
        <div className='flex flex-col text-2xl gap-7 '>
          <p>
            <strong>Analizamos</strong> el mercado bancario y <strong>evaluamos</strong> alternativas para <strong>ofrecerte la más conveniente</strong>.
          </p>
          <p>
            En <strong>Kapital House</strong> somos <strong>especialistas</strong> en asesoramiento financiero.
          </p>
          <div>
            <LinkComponent 
              lnk={data.lnk}
              name={data.name}
              styles={data.styles}         
            />
          </div>
        </div>
        <div>
          <img className='img-shadow-drop-left ' src={kHImg} alt="Kapital Home Wall" />
        </div>
      </div>
    </div>
  )
}
