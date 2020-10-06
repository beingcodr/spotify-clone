import React from 'react';

// styled components
import StyledCollectionItem from './StyledCollectionItem';

// dummy image
import DummyImage from './dummy-image.png';

const CollectionItem = ({ name, image, artist, type }) => {
    return (
        <StyledCollectionItem>
            <img
                className={!image && 'dummy-image'}
                style={{ borderRadius: `${(type === 'artist' || type === 'user') && '50%'}` }}
                src={image ? image : DummyImage}
                alt={name}
            />
            <h2 className='trackName'>{name}</h2>
            {artist && <p className='trackOwner'>By {artist}</p>}
            {type && <p className='trackOwner'>{type}</p>}
        </StyledCollectionItem>
    );
};

export default CollectionItem;
