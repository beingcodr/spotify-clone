import React from 'react';

// Styled components
import StyledCollectionContainer from './StyledCollectionContainer';

export const CollectionItem = ({ name, image, artist }) => {
    return (
        <div className='wrapper'>
            <div className='wrapper__trackContainer'>
                <img src={image} alt={name} />
                <h2 className='wrapper__trackContainer__trackName'>{name}</h2>
                <p className='wrapper__trackContainer__trackOwner'>By {artist}</p>
            </div>
        </div>
    );
};

const CollectionContainer = ({ title, children }) => {
    return (
        <StyledCollectionContainer>
            <h1 className='title'>{title}</h1>
            {children}
        </StyledCollectionContainer>
    );
};

export default CollectionContainer;
