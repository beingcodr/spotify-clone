import React, { useEffect } from 'react';
import { spotifyInstance } from '../../../config/spotify';
import { useDataLayerValue } from '../../../DataLayer';
import useWindowSize from '../../../utils/useWindowSize';

// React components
import CollectionContainer from '../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../CollectionContainer/CollectionItem/CollectionItem';

const Library = ({ match }) => {
    const [
        { playlists, followed_artists, saved_albums, savedShows, token },
        dispatch,
    ] = useDataLayerValue();
    const libraryState = match.params.libraryState;
    const windowSize = useWindowSize();
    const windowSizeCalc = windowSize.width >= 1024;

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
        <div style={{ padding: windowSizeCalc ? '0 2rem 10rem 2rem' : '0 1rem 10rem 1rem' }}>
            {libraryState === 'playlists' && playlists?.items?.length > 0 && (
                <CollectionContainer mutable title='Playlists'>
                    {playlists.items.map((item) => (
                        <CollectionItem
                            mutable
                            onClick={() => {
                                dispatch({ type: 'SET_MAINAPPSTATE', state: 'playlist' });
                                dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.id });
                            }}
                            link={`/playlist/${item.id}`}
                            name={item?.name}
                            image={item?.images[0]?.url}
                            artist={item.owner.display_name}
                            type={item.type}
                        />
                    ))}
                </CollectionContainer>
            )}

            {libraryState === 'podcasts' && savedShows?.items?.length > 0 && (
                <CollectionContainer mutable title='Podcasts'>
                    {savedShows.items.map((item) => (
                        <CollectionItem
                            mutable
                            // onClick={() => {
                            //     dispatch({ type: 'SET_MAINAPPSTATE', state: 'show' });
                            //     dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.show.id });
                            // }}
                            link={`/show/${item.show.id}`}
                            name={item?.show?.name}
                            image={item?.show?.images[0]?.url}
                            artist={item.show.publisher}
                            type={item.show.type}
                        />
                    ))}
                </CollectionContainer>
            )}

            {libraryState === 'artists' && followed_artists?.items?.length > 0 && (
                <CollectionContainer mutable title='Artists'>
                    {followed_artists.items.map((item) => (
                        <CollectionItem
                            mutable
                            // onClick={() => {
                            //     dispatch({ type: 'SET_MAINAPPSTATE', state: 'show' });
                            //     dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.show.id });
                            // }}
                            link={`/artist/${item.id}`}
                            name={item?.name}
                            image={item?.images[0]?.url}
                            type={item.type}
                            enableType
                        />
                    ))}
                </CollectionContainer>
            )}

            {libraryState === 'albums' && saved_albums?.items?.length > 0 && (
                <CollectionContainer mutable title='Albums'>
                    {saved_albums.items.map((item) => (
                        <CollectionItem
                            mutable
                            // onClick={() => {
                            //     dispatch({ type: 'SET_MAINAPPSTATE', state: 'show' });
                            //     dispatch({ type: 'SET_PLAYLIST_ID', playlistId: item.show.id });
                            // }}
                            link={`/album/${item.album.id}`}
                            name={item?.album?.name}
                            image={item?.album?.images[0]?.url}
                            artist={item?.album?.artists.map((artist) => artist.name).join(', ')}
                            type={item.album.type}
                        />
                    ))}
                </CollectionContainer>
            )}
        </div>
    );
};

export default Library;
