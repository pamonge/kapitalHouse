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

// FormComponent
export interface FormData {
    nombre: string;
    correo: string;
    telefono: string;
    mensaje: string;
    politicas: boolean;
    avisoLegal: boolean;
  }
  
// FormComponent
export interface FormErrors {
    nombre?: string;
    correo?: string;
    telefono?: string;
    mensaje?: string;
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