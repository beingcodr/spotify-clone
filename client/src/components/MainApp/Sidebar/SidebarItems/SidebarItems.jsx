import React from 'react';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledSidebarItems from './StyledSidebarItems';

export const SidebarOptions = ({ key, link, id, name, Icon, onClick }) => {
    const [{}, dispatch] = useDataLayerValue();

    return (
        <li className='sidebar-item-list-item'>
            <Link
                key={key && key}
                to={link}
                className='sidebarItems'
                onClick={() => {
                    if (!id) return;

                    onClick();
                }}
            >
                {Icon && <Icon className='sidebarItems__icon' />}
                {Icon ? (
                    <h4 className='sidebarItems__option'>{name}</h4>
                ) : (
                    <p className='sidebarItems__option'>{name}</p>
                )}
            </Link>
        </li>
    );
};

const SidebarItems = ({ title, children }) => {
    return (
        <StyledSidebarItems>
            {title && <h1 className='sidebarItems__title'>{title}</h1>}
            {children}
        </StyledSidebarItems>
    );
};

export default SidebarItems;
