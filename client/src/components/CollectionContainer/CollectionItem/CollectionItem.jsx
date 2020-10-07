import React from 'react';
import { Link } from 'react-router-dom';

// styled components
import StyledCollectionItem from './StyledCollectionItem';

// dummy image
import DummyImage from './dummy-image.png';

const CollectionItem = ({ name, image, artist, type, link, onClick }) => {
    return (
        <StyledCollectionItem onClick={onClick}>
            <Link to={link}>
                <img
                    className={!image && 'dummy-image'}
                    style={{ borderRadius: `${(type === 'artist' || type === 'user') && '50%'}` }}
                    src={image ? image : DummyImage}
                    alt={name}
                />
                <h2 className='trackName'>{name}</h2>
                {artist && (
                    <p className='trackOwner'>
                        {type === 'playlist' && 'By '}
                        {artist}
                    </p>
                )}
                {type && <p className='trackOwner'>{type}</p>}
            </Link>
        </StyledCollectionItem>
    );
};

export default CollectionItem;
