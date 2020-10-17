import React, { useEffect } from 'react';
import { spotifyInstance } from '../../../../config/spotify';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledPlaylist from './StyledPlaylist';

// Material icons
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// React componets
import PlaylistSong from './PlaylistSong/PlaylistSong';

const Playlist = ({ match, mainAppState }) => {
    const [{ discover_weekly, playlistId }, dispatch] = useDataLayerValue();
    const _playlistId = playlistId;

    useEffect(() => {
        spotifyInstance.getPlaylist(_playlistId).then((response) => {
            dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: response });
            dispatch({ type: 'SET_PLAYLIST_ID', playlistId: match.params.id });
        });
    }, [_playlistId]);

    console.log(mainAppState);

    return (
        <StyledPlaylist>
            <div className='playlist__info'>
                <img
                    src={
                        discover_weekly
                            ? discover_weekly?.images[0]?.url
                            : 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                    }
                    alt=''
                />
                <div className='playlist__info__text'>
                    <strong>PLAYLIST</strong>
                    <h4>{discover_weekly?.name}</h4>
                    <p>{discover_weekly?.tracks?.items.length} songs</p>
                </div>
            </div>

            <div className='playlist__songs'>
                <div className='playlist__songs__icons'>
                    <PlayCircleFilledIcon className='playlist__shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks?.items?.length > 0 &&
                    discover_weekly?.tracks?.items.map((item) => (
                        <PlaylistSong track={item?.track} />
                    ))}
            </div>
        </StyledPlaylist>
    );
};

export default Playlist;
