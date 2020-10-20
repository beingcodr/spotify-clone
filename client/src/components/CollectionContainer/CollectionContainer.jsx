import React from 'react';

// Styled components
import StyledCollectionContainer from './StyledCollectionContainer';

const CollectionContainer = ({ title, flexwrap, mutable, children }) => {
    return (
        <StyledCollectionContainer
            mutable={mutable ? true : false}
            flexwrap={flexwrap ? true : false}
        >
            <h1 className='title'>{title}</h1>
            <div className='wrapper'>{children}</div>
        </StyledCollectionContainer>
    );
};

export default CollectionContainer;
