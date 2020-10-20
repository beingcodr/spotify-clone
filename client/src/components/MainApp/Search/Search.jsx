import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../../DataLayer';
import { spotifyInstance } from '../../../config/spotify';

// Styled components
import StyledSearch from './StyledSearch';

// React icons
import CollectionContainer from '../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../CollectionContainer/CollectionItem/CollectionItem';

const Search = () => {
    const [{ searchQuery, searchResults }, dispatch] = useDataLayerValue();
    useEffect(() => {
        spotifyInstance
            .search(searchQuery, ['album', 'track', 'artist', 'playlist', 'show', 'episode'], {
                limit: 6,
            })
            .then((response) => {
                dispatch({ type: 'SET_SEARCH_QUERY_RESULTS', searchResults: response });
                console.log('search query results: ', response);
            });
    }, [searchQuery]);

    return (
        <StyledSearch>
            {searchQuery && (
                <>
                    {searchResults.tracks?.items?.length > 0 && (
                        <CollectionContainer title='Songs'>
                            {searchResults.tracks.items.map((item) => (
                                <CollectionItem
                                    name={item.name}
                                    link={`/track/${item.id}`}
                                    image={item?.album?.images[0]?.url}
                                    artist={item.album.artists
                                        .map((artist) => artist.name)
                                        .join(', ')}
                                />
                            ))}
                        </CollectionContainer>
                    )}

                    {searchResults.artists?.items?.length > 0 && (
                        <CollectionContainer title='Artists'>
                            {searchResults.artists.items.map((item) => (
                                <CollectionItem
                                    name={item.name}
                                    link={`/artist/${item.id}`}
                                    image={item?.images[0]?.url}
                                    type={item.type}
                                    enableType
                                />
                            ))}
                        </CollectionContainer>
                    )}

                    {searchResults.albums?.items?.length > 0 && (
                        <CollectionContainer title='Albums'>
                            {searchResults.albums.items.map((item) => (
                                <CollectionItem
                                    name={item.name}
                                    link={`/album/${item.id}`}
                                    image={item?.images[0]?.url}
                                    artist={item.artists.map((artist) => artist.name).join(', ')}
                                />
                            ))}
                        </CollectionContainer>
                    )}

                    {searchResults.playlists?.items?.length > 0 && (
                        <CollectionContainer title='Playlists'>
                            {searchResults.playlists.items.map((item) => (
                                <CollectionItem
                                    name={item.name}
                                    link={`/playlist/${item.id}`}
                                    image={item?.images[0]?.url}
                                    artist={item.owner.display_name}
                                />
                            ))}
                        </CollectionContainer>
                    )}

                    {searchResults.shows?.items?.length > 0 && (
                        <CollectionContainer title='Podcasts'>
                            {searchResults.shows.items.map((item) => (
                                <CollectionItem name={item.name} image={item?.images[0]?.url} />
                            ))}
                        </CollectionContainer>
                    )}

                    {searchResults.episodes?.items?.length > 0 && (
                        <CollectionContainer title='Episodes'>
                            {searchResults.episodes.items.map((item) => (
                                <CollectionItem name={item.name} image={item?.images[0]?.url} />
                            ))}
                        </CollectionContainer>
                    )}

                    {!searchResults.tracks?.items.length &&
                        !searchResults.artists?.items.length &&
                        !searchResults.albums?.items.length &&
                        !searchResults.playlists?.items.length &&
                        !searchResults.shows?.items.length &&
                        !searchResults.episodes?.items.length && (
                            <p
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                No matches found
                            </p>
                        )}
                </>
            )}
        </StyledSearch>
    );
};

export default Search;
