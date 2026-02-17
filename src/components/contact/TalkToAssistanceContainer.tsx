import React from 'react'
import { DescriptionComponent } from '../general/DescriptionComponent'
import { type cardData } from '../../types/grlInterfaces'
import linkedIn from '../../assets/icons/LinkedIn.png'
import whatsapp from '../../assets/icons/WhatsApp.png'
import email from '../../assets/icons/Letter.png'
import smilingMan from '../../assets/contact/smilingMan.png'
import { NavLink } from 'react-router-dom'

export const TalkToAssistanceContainer: React.FC = () => {
    const contactData: cardData[] = [
        {
            img: whatsapp,
            title: 'https://wa.me/34631203721',
            text: '+34 631 20 37 21',
        },{
            img: email,
            title: 'mailto:info@kapitalhouse.es?subject=Consulta desde la web&body=Hola, desearía información al respecto de ...',
            text: 'info@kapitalhouse.es',
        },{
            img: linkedIn,
            title: 'https://share.google/gxG1kIj0A542M3Yyd',
            text: 'Kapital House Mondial',
        }
    ]
    return (
        <div className='container' >
            <DescriptionComponent 
                title='Habla con nuestros asesores'
                leftSide={
                    <div className='flex flex-col gap-5'>
                        <p className='text-lg lg:text-3xl font-bold'>
                            Cuéntanos tu proyecto y te acompañamos en todo el proceso.
                        </p>
                        <p className='text-xl leading-10'>
                            Ponte en contacto con nosotros y cuéntanos tu situación. Analizaremos tu perfil financiero y te orientaremos sobre las mejores opciones de financiación disponibles para ti, de forma clara y transparente.
                        </p>
                        <div className='flex flex-col gap-3'>
                            {
                                contactData.map((data, key) => (
                                    <NavLink className='flex gap-3 items-center' key={key} to={data.title || '#'} target='_blank'>                
                                        <img 
                                            className='w-10  '
                                            alt={data.text} 
                                            src={data.img} />
                                        <p>{data.text}</p>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                }
                rightSide={
                    <img className='img-shadow-drop-left ' src={smilingMan} alt="smiling man" />
                }
            
            />
            
        </div>
    )
}
