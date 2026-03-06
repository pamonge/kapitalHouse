// WhiteCardComponent - OurProcesComponent
export interface cardData {
    img: string,
    title?: string,
    text?: string,
}

// CardContainerComponent
export interface cardContainerData {
    cardDataProp: cardData[],
}

// FormComponent - keys alineados con EmailJS (name, email, title, message)
// variant empresas: name=empresa, email=correo, title=teléfono, message=consulta
export type FormVariant = 'particulares' | 'empresas';

export const TIPO_CONSULTA_OPCIONES = [
  'Quiero saber cuánto puedo solicitar para comprar un inmueble',
  'Consulta por financiación hipotecaria',
  'Consultar modalidad de préstamo',
  'Otras consultas',
] as const;

export type TipoConsultaValue = typeof TIPO_CONSULTA_OPCIONES[number];

export const TIPO_CONSULTA_CON_SIMULADOR: TipoConsultaValue[] = [
  'Quiero saber cuánto puedo solicitar para comprar un inmueble',
  'Consulta por financiación hipotecaria',
];

export interface FormData {
    name: string;
    email: string;
    title: string;
    tipoConsulta?: string;
    message: string;
    politicas: boolean;
    avisoLegal: boolean;
  }
  
// FormComponent
export interface FormErrors {
    name?: string;
    email?: string;
    title?: string;
    tipoConsulta?: string;
    message?: string;
    politicas?: string;
    avisoLegal?: string;
    submit?: string;
  }
  
// BlueBannerComponent
export interface blueBannerProps {
    content: React.ReactNode;
    lnkComponent?: React.ReactNode;
}

// DescriptionComponent
export interface descriptionData {
    title: string,
    leftSide: React.ReactNode
    rightSide: React.ReactNode
}

// LinkComponent - NavBarComponent - CreditSecurityComponent
export interface linkProps {
    lnk: string;
    name: string;
    styles?: string;
}

// Simulador de crédito - datos para incluir en correo
export interface SimulatorData {
  tipoVivienda: string;
  montoTotal: number;
  dineroSolicitar: number;
  plazoAnos: number;
  capitalDisponible: string;
  capitalValor: number;
  capitalDetalle?: string;
  porcentajeFinanciar: number;
  edad: number;
  situacionLaboral: string;
  antiguedadLaboral: number;
  dineroNecesarioExtra: number;
  dineroAproximadoOtorgado: number;
}