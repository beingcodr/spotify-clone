import React, { useEffect } from 'react';
import { spotifyInstance } from '../../../../config/spotify';
import { useDataLayerValue } from '../../../../DataLayer';
import useWindowSize from '../../../../utils/useWindowSize';

// Styled components
import StyledDetailedComp from './StyledDetailedComp';

// Material icons
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// React componets
import SongTrack from './SongTrack/SongTrack.jsx';

const Playlist = ({ match, mainAppState }) => {
    const [{ discover_weekly, detailedId }, dispatch] = useDataLayerValue();
    //? It can be anything an album, show, playlist, etc
    const _detailedId = detailedId;
    const windowSize = useWindowSize();
    const windowSizeCalc = windowSize.width >= 1024;
    const windowSizeCalcLt = windowSize.width <= 1024;

    useEffect(() => {
        dispatch({ type: 'SET_DETAILED_ID', detailedId: match.params.id });
        switch (mainAppState) {
            case 'playlist':
                spotifyInstance.getPlaylist(_detailedId).then((response) => {
                    dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: response });
                });
                break;

            case 'album':
                spotifyInstance.getAlbum(_detailedId).then((response) => {
                    dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: response });
                });
                break;

            case 'track':
                spotifyInstance.getTrack(_detailedId).then((response) => {
                    dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: response });
                });
                break;

            case 'artist':
                spotifyInstance.getArtist(_detailedId).then((response) => {
                    dispatch({ type: 'SET_DISCOVER_WEEKLY', discover_weekly: response });
                });
                break;

            default:
                break;
        }
    }, [_detailedId]);

    console.log('detailed app data', discover_weekly);
    console.log(mainAppState);

    return (
        <StyledDetailedComp>
            {/* For Playlist */}
            {mainAppState === 'playlist' && (
                <>
                    <div className='detailed__info'>
                        <img
                            src={
                                discover_weekly
                                    ? discover_weekly?.images[0]?.url
                                    : 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                            }
                            alt={discover_weekly?.name}
                        />
                        <div className='detailed__info__text'>
                            {windowSizeCalc && <strong>PLAYLIST</strong>}
                            <h4>{discover_weekly?.name}</h4>
                            {windowSizeCalc && <p>{discover_weekly?.tracks?.items.length} songs</p>}
                            {windowSizeCalcLt && (
                                <p
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '.8rem',
                                        fontWeight: '600',
                                        marginTop: '.5rem',
                                    }}
                                >
                                    By {discover_weekly?.owner?.display_name}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className='detailed__songs'>
                        <div className='detailed__songs__icons'>
                            <PlayCircleFilledIcon className='detailed__shuffle' />
                            <FavoriteIcon fontSize='large' />
                            <MoreHorizIcon />
                        </div>
                        {discover_weekly?.tracks?.items?.length > 0 &&
                            discover_weekly?.tracks?.items.map((item) => (
                                <SongTrack
                                    trackImg={item?.track?.album?.images[0]?.url}
                                    trackName={item?.track?.name}
                                    trackArtists={item?.track?.artists}
                                />
                            ))}
                    </div>
                </>
            )}

            {/* For Album */}
            {mainAppState === 'album' && (
                <>
                    <div className='detailed__info'>
                        <img
                            src={
                                discover_weekly
                                    ? discover_weekly?.images[0]?.url
                                    : 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                            }
                            alt={discover_weekly?.name}
                        />
                        <div className='detailed__info__text'>
                            {windowSizeCalc && (
                                <strong>{discover_weekly?.type.toUpperCase()}</strong>
                            )}
                            <h4>{discover_weekly?.name}</h4>
                            {windowSizeCalc && <p>{discover_weekly?.tracks?.items.length} songs</p>}
                        </div>
                    </div>

                    <div className='detailed__songs'>
                        <div className='detailed__songs__icons'>
                            <PlayCircleFilledIcon className='detailed__shuffle' />
                            <FavoriteIcon fontSize='large' />
                            <MoreHorizIcon />
                        </div>
                        {discover_weekly?.tracks?.items?.length > 0 &&
                            discover_weekly?.tracks?.items.map((item) => (
                                <SongTrack
                                    trackImg={discover_weekly?.images[0]?.url}
                                    trackName={item?.name}
                                    trackArtists={item?.artists}
                                />
                            ))}
                    </div>
                </>
            )}

            {/* For Track */}
            {mainAppState === 'track' && (
                <>
                    <div className='detailed__info'>
                        <img
                            src={
                                discover_weekly
                                    ? discover_weekly?.album?.images[0]?.url
                                    : 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                            }
                            alt={discover_weekly?.name}
                        />
                        <div className='detailed__info__text'>
                            {windowSizeCalc && (
                                <strong>{discover_weekly?.type.toUpperCase()}</strong>
                            )}
                            <h4>{discover_weekly?.name}</h4>
                        </div>
                    </div>

                    <div className='detailed__songs'>
                        <div className='detailed__songs__icons'>
                            <PlayCircleFilledIcon className='detailed__shuffle' />
                            <FavoriteIcon fontSize='large' />
                            <MoreHorizIcon />
                        </div>
                        <SongTrack
                            trackImg={discover_weekly?.album?.images[0]?.url}
                            trackName={discover_weekly?.name}
                            trackArtists={discover_weekly?.album?.artists}
                        />
                    </div>
                </>
            )}

            {/* For Artist */}
            {mainAppState === 'artist' && (
                <>
                    <div className='detailed__info'>
                        <img
                            src={
                                discover_weekly
                                    ? discover_weekly?.images[0]?.url
                                    : 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                            }
                            alt=''
                        />
                        <div className='detailed__info__text'>
                            {windowSizeCalc && <strong>Verified artist</strong>}
                            <h4>{discover_weekly?.name}</h4>
                            <p>
                                {new Intl.NumberFormat().format(discover_weekly?.followers?.total)}{' '}
                                monthly listeners
                            </p>
                        </div>
                    </div>

                    <div className='detailed__songs'>
                        <div className='detailed__songs__icons'>
                            <PlayCircleFilledIcon className='detailed__shuffle' />
                            <FavoriteIcon fontSize='large' />
                            <MoreHorizIcon />
                        </div>
                        {/* {discover_weekly?.tracks?.items?.length > 0 &&
                            discover_weekly?.tracks?.items.map((item) => (
                                <SongTrack
                                    trackImg={item?.track?.album?.images[0]?.url}
                                    trackName={item?.track?.name}
                                    trackArtists={item?.track?.artists}
                                />
                            ))} */}
                    </div>
                </>
            )}
        </StyledDetailedComp>
    );
};

export default Playlist;
