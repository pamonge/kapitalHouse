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
export interface FormData {
    name: string;
    email: string;
    title: string;
    message: string;
    politicas: boolean;
    avisoLegal: boolean;
  }
  
// FormComponent
export interface FormErrors {
    name?: string;
    email?: string;
    title?: string;
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