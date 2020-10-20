import React from 'react';
import { Link } from 'react-router-dom';

// styled components
import StyledCollectionItem from './StyledCollectionItem';

// dummy image
import DummyImage from './dummy-image.png';

const CollectionItem = ({ name, image, artist, type, link, onClick, enableType, mutable }) => {
    return (
        <StyledCollectionItem mutable={mutable ? true : false} onClick={onClick}>
            <Link to={link}>
                <img
                    className={image ? '' : 'dummy-image'}
                    style={{ borderRadius: `${(type === 'artist' || type === 'user') && '50%'}` }}
                    src={image ? image : DummyImage}
                    alt={name}
                />
                <div className='trackInfo'>
                    <h2 className='trackInfo__trackName'>
                        {name.length >= 25 && !mutable
                            ? `${name.substring(0, 25)} ....`
                            : `${name}`}
                    </h2>
                    {artist && (
                        <p className='trackInfo__trackOwner'>
                            {type === 'playlist' && 'By '}
                            {artist}
                        </p>
                    )}
                    {enableType && <p className='trackInfo__trackOwner'>{type}</p>}
                </div>
            </Link>
        </StyledCollectionItem>
    );
};

export default CollectionItem;
