import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../../DataLayer';

// React components
import CollectionContainer from '../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../CollectionContainer/CollectionItem/CollectionItem';

const Library = () => {
    const [
        { playlists, followed_artists, saved_albums, savedShows, token, libraryState },
        dispatch,
    ] = useDataLayerValue();
    const spotifyInstance = new SpotifyWebApi();

    useEffect(() => {
        spotifyInstance.setAccessToken(token);

        switch (libraryState) {
            case 'playlists':
                spotifyInstance.getUserPlaylists().then((res) => {
                    dispatch({ type: 'SET_PLAYLISTS', playlists: res });
                });
                break;

            case 'podcasts':
                spotifyInstance.getMySavedShows().then((res) => {
                    dispatch({ type: 'SET_SAVED_SHOWS', savedShows: res });
                });
                break;

            case 'artists':
                spotifyInstance.getFollowedArtists().then((res) => {
                    dispatch({ type: 'SET_FOLLOWED_ARTISTS', followed_artists: res.artists });
                });
                break;

            case 'albums':
                spotifyInstance.getMySavedAlbums().then((res) => {
                    dispatch({ type: 'SET_SAVED_ALBUMS', saved_albums: res });
                });
                break;

            default:
                break;
        }
    }, [libraryState]);

    return (
        <>
            {libraryState === 'playlists' && playlists?.items?.length > 0 && (
                <CollectionContainer flexwrap title='Playlists'>
                    {playlists.items.map((item) => (
                        <CollectionItem
                            flexwrap
                            onClick={() => {
                                dispatch({ type: 'SET_MAINAPPSTATE', state: 'playlist' });
                                dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.id });
                            }}
                            link={`playlist/${item.id}`}
                            name={item.name}
                            image={item?.images[0]?.url}
                            artist={item.owner.display_name}
                            type={item.type}
                        />
                    ))}
                </CollectionContainer>
            )}

            {libraryState === 'podcasts' && savedShows?.items?.length > 0 && (
                <CollectionContainer flexwrap title='Podcasts'>
                    {savedShows.items.map((item) => (
                        <CollectionItem
                            flexwrap
                            // onClick={() => {
                            //     dispatch({ type: 'SET_MAINAPPSTATE', state: 'show' });
                            //     dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.show.id });
                            // }}
                            link={`show/${item.show.id}`}
                            name={item.show.name}
                            image={item?.show?.images[0]?.url}
                            artist={item.show.publisher}
                            type={item.show.type}
                        />
                    ))}
                </CollectionContainer>
            )}

            {libraryState === 'artists' && followed_artists?.items?.length > 0 && (
                <CollectionContainer flexwrap title='Artists'>
                    {followed_artists.items.map((item) => (
                        <CollectionItem
                            flexwrap
                            imgWidth='90%'
                            // onClick={() => {
                            //     dispatch({ type: 'SET_MAINAPPSTATE', state: 'show' });
                            //     dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.show.id });
                            // }}
                            link={`artist/${item.id}`}
                            name={item.name}
                            image={item?.images[0]?.url}
                            type={item.type}
                            enableType
                        />
                    ))}
                </CollectionContainer>
            )}

            {libraryState === 'albums' && saved_albums?.items?.length > 0 && (
                <CollectionContainer flexwrap title='Albums'>
                    {saved_albums.items.map((item) => (
                        <CollectionItem
                            flexwrap
                            // onClick={() => {
                            //     dispatch({ type: 'SET_MAINAPPSTATE', state: 'show' });
                            //     dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.show.id });
                            // }}
                            link={`album/${item.album.id}`}
                            name={item.album.name}
                            image={item?.album?.images[0]?.url}
                            artist={item?.album?.artists.map((artist) => artist.name).join(', ')}
                            type={item.album.type}
                        />
                    ))}
                </CollectionContainer>
            )}
        </>
    );
};

export default Library;
