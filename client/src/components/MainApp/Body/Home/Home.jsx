import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../../../DataLayer';

// React components
import CollectionContainer from '../../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../../CollectionContainer/CollectionItem/CollectionItem';

const Home = () => {
    // ! Do not touch the logic of this component
    const [{ token, newReleases, recentlyPlayedTracks }, dispatch] = useDataLayerValue();
    const spotifyInstance = new SpotifyWebApi();

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

        // ! This dependency is required to be like this
    }, [newReleases.albums]);

    console.log('The newReleases state: ', newReleases);
    console.log('The recentlyPlayedTracks state: ', recentlyPlayedTracks);

    return (
        <>
            {newReleases.items && (
                <CollectionContainer title='New releases'>
                    {newReleases.items.map((item) => {
                        return (
                            <CollectionItem
                                name={
                                    item.name.length >= 20
                                        ? `${item.name.substring(0, 20)} ....`
                                        : `${item.name}`
                                }
                                image={item.images[0].url}
                                artist={item.artists.map((artist) => artist.name).join(', ')}
                            />
                        );
                    })}
                </CollectionContainer>
            )}

            {recentlyPlayedTracks.items && (
                <CollectionContainer title='Recently played'>
                    {recentlyPlayedTracks.items.map((item) => (
                        <CollectionItem
                            name={
                                item.track.album.name.length >= 20
                                    ? `${item.track.album.name.substring(0, 20)} ....`
                                    : `${item.track.album.name}`
                            }
                            image={item.track.album.images[0].url}
                            artist={item.track.album.artists
                                .map((artist) => artist.name)
                                .join(', ')}
                        />
                    ))}
                </CollectionContainer>
            )}
        </>
    );
};

export default Home;
