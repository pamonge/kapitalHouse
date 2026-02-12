import { type cardData } from '../types/grlInterfaces'
import salaryMan from '../assets/icons/salaryMale.png'
import broker from '../assets/icons/broker.png'
import termsAndConditions from '../assets/icons/termsAndConditions.png'
import signingDocument from '../assets/icons/signingADocument.png'
import certificate from '../assets/icons/certificate.png'
import meeting from '../assets/icons/meeting.png'
import realStateAgent from '../assets/icons/realStateAgent.png'
import legal from  '../assets/icons/legal.png'

export const ourProcessData: cardData[] = [
    {
        img: salaryMan,
        title: 'Contacto',
        text: 'Realizamos un estudio de viabilidad gratuito y analizamos tu perfil financiero. Te damos respuesta en un plazo máximo de 24 horas.'
    },{
        img: broker,
        title: 'Negociación',
        text: 'Presentamos tu operación a distintas entidades bancarias. Negociamos para obtener las mejores condiciones según tu perfil.'
    },{
        img: termsAndConditions,
        title: 'Oferta y tasación',
        text: 'Seleccionamos la mejor oferta hipotecaria disponible para ti. Gestionamos la tasación y revisamos todos los detalles antes de la aceptación final.'
    },{
        img: signingDocument,
        title: 'Firma en notaría',
        text: 'Preparamos toda la documentación y te acompañamos a notaría. Se firma la compraventa y el préstamo hipotecario.'
    }
]

export const makeItPosibleData: cardData[] = [
    {
        img: realStateAgent,
        title: 'Gestión experta',
        text: 'Profesionales especializados en hipotecas.'
    },{
        img: certificate,
        title: 'Experiencia comprobada',
        text: 'Trayectoria en el sector financiero.'
    },{
        img: meeting,
        title: 'Atención personalizada',
        text: 'Un servicio a medida, de principio a fin.'
    }
]

export const longCardData: cardData[] = [
    {
        img: broker,
        title: 'Gestión bancaria integral',
    },{
        img: signingDocument,
        title: 'Preparación para firma'
    },{
        img: legal,
        title: 'Asistencia notarial'
    }
]