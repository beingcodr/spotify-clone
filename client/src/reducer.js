export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    savedShows: {},
    saved_albums: {},
    followed_artists: {},
    playlistId: null,
    detailedId: null,
    playing: false,
    item: null,
    newReleases: {},
    recentlyPlayedTracks: {},
    searchQuery: '',
    searchResults: {},
    // ! Remove the token after development
    token: '',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };

        case 'SET_TOKEN':
            return { ...state, token: action.token };

        case 'SET_PLAYLISTS':
            return { ...state, playlists: action.playlists };

        case 'SET_DISCOVER_WEEKLY':
            return { ...state, discover_weekly: action.discover_weekly };

        case 'SET_PLAYLIST_ID':
            return { ...state, playlistId: action.playlistId };

        case 'SET_DETAILED_ID':
            return { ...state, detailedId: action.detailedId };

        case 'SET_NEW_RELEASES':
            return { ...state, newReleases: action.newReleases };

        case 'SET_RECENTLY_PLAYED_TRACKS':
            return { ...state, recentlyPlayedTracks: action.recentlyPlayedTracks };

        case 'SET_SAVED_SHOWS':
            return { ...state, savedShows: action.savedShows };

        case 'SET_SAVED_ALBUMS':
            return { ...state, saved_albums: action.saved_albums };

        case 'SET_FOLLOWED_ARTISTS':
            return { ...state, followed_artists: action.followed_artists };

        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.searchQuery };

        case 'SET_SEARCH_QUERY_RESULTS':
            return { ...state, searchResults: { ...action.searchResults } };

        default:
            return state;
    }
};

export default reducer;
