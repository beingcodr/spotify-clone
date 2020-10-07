import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../../DataLayer';

// React components
import CollectionContainer from '../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../CollectionContainer/CollectionItem/CollectionItem';

const Library = () => {
    const [{ playlists, token }, dispatch] = useDataLayerValue();
    const spotifyInstance = new SpotifyWebApi();

    useEffect(() => {
        spotifyInstance.setAccessToken(token);
        spotifyInstance.getUserPlaylists().then((res) => {
            console.log(res);
            dispatch({ type: 'SET_PLAYLISTS', playlists: res });
        });
    }, []);

    return (
        <>
            {playlists.items && (
                <CollectionContainer title='Playlists'>
                    {playlists.items.map((item) => (
                        <CollectionItem
                            onClick={() => {
                                dispatch({ type: 'SET_MAINAPPSTATE', state: 'playlist' });
                                dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.id });
                            }}
                            link={`playlist/${item.id}`}
                            name={item.name}
                            image={item?.images[0]?.url}
                            artist={item.owner.display_name}
                        />
                    ))}
                </CollectionContainer>
            )}
        </>
    );
};

export default Library;
