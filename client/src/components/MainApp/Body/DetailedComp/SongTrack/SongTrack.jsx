import React from 'react';

// styled components
import StyledSongTrack from './StyledSongTrack';

const PlaylistSong = ({ trackImg, trackName, trackArtists }) => {
    return (
        <StyledSongTrack>
            <img src={trackImg} alt={trackName} />
            <div className='detailedSong__info'>
                <h1>{trackName}</h1>
                {trackArtists && <p>{trackArtists.map((artist) => artist.name).join(', ')}</p>}
            </div>
        </StyledSongTrack>
    );
};

export default PlaylistSong;
