import React from 'react';

// Styled components
import StyledCollectionContainer from './StyledCollectionContainer';

const CollectionContainer = ({ title, collectionItems, collectionItemImages }) => {
    return (
        <StyledCollectionContainer>
            <h1 className='title'>{title}</h1>
            <div className='wrapper'>
                {/* The below conditional check has to be like this else the code breaks */}
                {collectionItems.items ? (
                    collectionItems.items.map((item, index) => (
                        <div className='wrapper__trackContainer'>
                            <img src={collectionItemImages[index]} alt={item.name} />
                            <h2 className='wrapper__trackContainer__trackName'>{item.name}</h2>
                            <p className='wrapper__trackContainer__trackOwner'>
                                By {item.artists.map((artist) => artist.name).join(', ')}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>error</p>
                )}
            </div>
        </StyledCollectionContainer>
    );
};

export default CollectionContainer;
