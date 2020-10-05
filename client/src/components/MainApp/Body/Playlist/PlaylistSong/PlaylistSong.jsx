import React from 'react';

// styled components
import StyledPlaylistSong from './StyledPlaylistSong';

const PlaylistSong = ({ track }) => {
    return (
        <StyledPlaylistSong>
            <img src={track.album.images[0].url} alt='' />
            <div className='playlistSong__info'>
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
            </div>
        </StyledPlaylistSong>
    );
};

export default PlaylistSong;
