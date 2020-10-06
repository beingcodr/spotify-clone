import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../../DataLayer';

// Styled components
import StyledSearch from './StyledSearch';

// React icons
import CollectionContainer from '../../CollectionContainer/CollectionContainer';
import CollectionItem from '../../CollectionContainer/CollectionItem/CollectionItem';

const Search = () => {
    const [{ searchQuery, searchResults }, dispatch] = useDataLayerValue();
    const spotifyInstance = new SpotifyWebApi();
    useEffect(() => {
        spotifyInstance
            .search(searchQuery, ['album', 'track', 'artist', 'playlist'], { limit: 6 })
            .then((response) => {
                dispatch({ type: 'SET_SEARCH_QUERY_RESULTS', searchResults: response });
                console.log('search query results: ', response);
            });
    }, [searchQuery]);

    return (
        <StyledSearch>
            {searchQuery && (
                <>
                    <CollectionContainer title='Songs'>
                        {searchResults.tracks
                            ? searchResults.tracks.items.map((item) => (
                                  <CollectionItem
                                      name={
                                          item.name.length >= 20
                                              ? `${item.name.substring(0, 20)} ....`
                                              : `${item.name}`
                                      }
                                      image={item?.album?.images[0]?.url}
                                      artist={item.album.artists
                                          .map((artist) => artist.name)
                                          .join(', ')}
                                  />
                              ))
                            : 'searching for songs'}
                    </CollectionContainer>
                    <CollectionContainer title='Artists'>
                        {searchResults.artists
                            ? searchResults.artists.items.map((item) => (
                                  <CollectionItem
                                      name={
                                          item.name.length >= 20
                                              ? `${item.name.substring(0, 20)} ....`
                                              : `${item.name}`
                                      }
                                      image={item?.images[0]?.url}
                                      type={item.type}
                                  />
                              ))
                            : 'searching for songs'}
                    </CollectionContainer>
                    <CollectionContainer title='Albums'>
                        {searchResults.albums
                            ? searchResults.albums.items.map((item) => (
                                  <CollectionItem
                                      name={
                                          item.name.length >= 20
                                              ? `${item.name.substring(0, 20)} ....`
                                              : `${item.name}`
                                      }
                                      image={item?.images[0]?.url}
                                      artist={item.artists.map((artist) => artist.name).join(', ')}
                                  />
                              ))
                            : 'searching for songs'}
                    </CollectionContainer>
                    <CollectionContainer title='Playlists'>
                        {searchResults.playlists
                            ? searchResults.playlists.items.map((item) => (
                                  <CollectionItem
                                      name={
                                          item.name.length >= 20
                                              ? `${item.name.substring(0, 20)} ....`
                                              : `${item.name}`
                                      }
                                      image={item?.images[0]?.url}
                                      artist={item.owner.display_name}
                                  />
                              ))
                            : 'searching for songs'}
                    </CollectionContainer>
                </>
            )}
        </StyledSearch>
    );
};

export default Search;
