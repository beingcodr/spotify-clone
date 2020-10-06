import React from 'react';

// Styled components
import StyledCollectionContainer from './StyledCollectionContainer';

const CollectionContainer = ({ title, children }) => {
    return (
        <StyledCollectionContainer>
            <h1 className='title'>{title}</h1>
            <div className='wrapper'>{children}</div>
        </StyledCollectionContainer>
    );
};

export default CollectionContainer;
