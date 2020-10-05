import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledHome from './StyledHome';

const Home = () => {
    // ! Do not touch the logic of this component
    const [{ token, newReleases, recentlyPlayedTracks }, dispatch] = useDataLayerValue();
    const spotifyInstance = new SpotifyWebApi();

    useEffect(() => {
        spotifyInstance.setAccessToken(token);

        spotifyInstance
            .getNewReleases({ limit: 5 })
            .then((response) =>
                dispatch({ type: 'SET_NEW_RELEASES', newReleases: response.albums })
            );

        spotifyInstance.getMyRecentlyPlayedTracks({ limit: 5 }).then((res) => {
            dispatch({
                type: 'SET_RECENTLY_PLAYED_TRACKS',
                recentlyPlayedTracks: res,
            });
        });

        // ! This dependency is required to be like this
    }, [newReleases.albums]);

    console.log('The recentlyPlayedTracks state: ', recentlyPlayedTracks);

    return (
        <StyledHome>
            <div className='spotifyCollection'>
                <h1 className='spotifyCollection__title'>New releases</h1>
                <div className='spotifyCollection__wrapper'>
                    {/* The below conditional check has to be like this else the code breaks */}
                    {newReleases.items ? (
                        newReleases.items.map((item) => (
                            <div className='spotifyCollection__wrapper__trackContainer'>
                                <img src={item.images[0].url} alt={item.name} />
                                <h2 className='spotifyCollection__wrapper__trackContainer__trackName'>
                                    {item.name}
                                </h2>
                                <p className='spotifyCollection__wrapper__trackContainer__trackOwner'>
                                    By {item.artists.map((artist) => artist.name).join(', ')}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>error</p>
                    )}
                </div>
            </div>
            <div className='spotifyCollection'>
                <h1 className='spotifyCollection__title'>Recently played</h1>
                <div className='spotifyCollection__wrapper'>
                    {/* The below conditional check has to be like this else the code breaks */}
                    {recentlyPlayedTracks.items ? (
                        recentlyPlayedTracks.items.map((item) => (
                            <div className='spotifyCollection__wrapper__trackContainer'>
                                <img src={item.track.album.images[0].url} alt={item.track.name} />
                                <h2 className='spotifyCollection__wrapper__trackContainer__trackName'>
                                    {item.track.name}
                                </h2>
                                <p className='spotifyCollection__wrapper__trackContainer__trackOwner'>
                                    By {item.track.artists.map((artist) => artist.name).join(', ')}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>error</p>
                    )}
                </div>
            </div>
        </StyledHome>
    );
};

export default Home;
