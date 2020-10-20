import React, { useEffect, useState } from 'react';
import { spotifyInstance } from '../../../../config/spotify';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled-components
import StyledHome from './StyledHome';

// React components
import CollectionContainer from '../../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../../CollectionContainer/CollectionItem/CollectionItem';

const Home = () => {
    // ! Do not touch the logic of this component
    const [
        { token, newReleases, recentlyPlayedTracks, savedShows },
        dispatch,
    ] = useDataLayerValue();

    useEffect(() => {
        spotifyInstance.setAccessToken(token);

        spotifyInstance
            .getNewReleases({ limit: 6 })
            .then((response) =>
                dispatch({ type: 'SET_NEW_RELEASES', newReleases: response.albums })
            );

        spotifyInstance.getMyRecentlyPlayedTracks({ limit: 6 }).then((res) => {
            dispatch({
                type: 'SET_RECENTLY_PLAYED_TRACKS',
                recentlyPlayedTracks: res,
            });
        });

        spotifyInstance.getMySavedShows({ limit: 6 }).then((res) => {
            dispatch({
                type: 'SET_SAVED_SHOWS',
                savedShows: res,
            });
        });

        // ! This dependency is required to be like this
    }, [newReleases.albums]);

    return (
        <StyledHome>
            {/* Recently played */}
            {recentlyPlayedTracks.items?.length > 0 && (
                <CollectionContainer title='Recently played'>
                    {recentlyPlayedTracks.items.map((item) => (
                        <CollectionItem
                            name={
                                item.track.album.name.length >= 20
                                    ? `${item.track.album.name.substring(0, 20)} ....`
                                    : `${item.track.album.name}`
                            }
                            image={item?.track?.album?.images[0]?.url}
                            artist={item.track.album.artists
                                .map((artist) => artist.name)
                                .join(', ')}
                        />
                    ))}
                </CollectionContainer>
            )}

            {/* New Releases */}
            {newReleases.items?.length > 0 && (
                <CollectionContainer title='New releases'>
                    {newReleases.items.map((item) => {
                        return (
                            <CollectionItem
                                name={
                                    item.name.length >= 20
                                        ? `${item.name.substring(0, 20)} ....`
                                        : `${item.name}`
                                }
                                image={item?.images[0]?.url}
                                artist={item.artists.map((artist) => artist.name).join(', ')}
                            />
                        );
                    })}
                </CollectionContainer>
            )}

            {/* Saved shows/podcasts */}
            {savedShows.items?.length > 0 && (
                <CollectionContainer title='Your top shows'>
                    {savedShows.items.map((item) => (
                        <CollectionItem
                            name={
                                item.show.name.length >= 20
                                    ? `${item.show.name.substring(0, 20)} ....`
                                    : `${item.show.name}`
                            }
                            image={item?.show?.images[0]?.url}
                            artist={item.show.publisher}
                            type={item.type}
                        />
                    ))}
                </CollectionContainer>
            )}
        </StyledHome>
    );
};

export default Home;
