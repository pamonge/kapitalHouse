import React from 'react'
import { WhiteCardComponent } from './WhiteCardComponent'
import { type cardContainerData } from '../../types/grlInterfaces'

export const CardContainerComponent: React.FC<cardContainerData> = ({ cardDataProp }) => {
    
    return (
        <div className='flex max-lg:flex-col gap-20 justify-center items-center'>
            {
                cardDataProp.map((data, key) => (
                    <WhiteCardComponent
                        key={key}
                        img={data.img}
                        title={data.title}
                        text={data.text}
                    /> 
                ))
                    
            }
        </div>
    )
}
