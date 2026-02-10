import React from 'react';
import { Link } from 'react-router-dom';
import { GRL_STYLES } from '../../styles/generalStyles';

interface LinkProps {
    lnk: string;
    name: string;
    styles?: string;
}

export const LinkComponent: React.FC<LinkProps> = ({ lnk, name, styles =  `${GRL_STYLES.defaulLinkComp}` }) => {
  return (
    <Link to={lnk} className={styles}>
        {name}
    </Link>
  )
}
