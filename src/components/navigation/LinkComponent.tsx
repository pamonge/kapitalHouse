import React from 'react';
import { Link } from 'react-router-dom';
import { GRL_STYLES } from '../../styles/generalStyles';
import { type linkProps } from '../../types/grlInterfaces';

export const LinkComponent: React.FC<linkProps> = ({ lnk, name, styles =  `${GRL_STYLES.defaulLinkComp}` }) => {
  return (
    <Link to={lnk} className={styles}>
        {name}
    </Link>
  )
}
