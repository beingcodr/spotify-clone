export const initialState = {
    user: null,
    playlists: [],
    discover_weekly: null,
    savedShows: {},
    saved_albums: {},
    followed_artists: {},
    playlistId: null,
    playing: false,
    item: null,
    newReleases: {},
    recentlyPlayedTracks: {},
    searchQuery: '',
    searchResults: {},
    // ! Remove the token after development
    token:
        'BQBc7JSLf115vRH-dw8f-rUwbeLAx6yVv3yNHHxIKQ8uGyv2GLljmOTpsuCccdOFUCsVw-AWBNVZDgC0BndmDwv0RPZ-bBfgySt3OSbGDVKMEG3FFlk15t63DfhTckRLTI2KyG4WwvFUIJ3UqsryaBzOVnPVWnwDh2OFEZN1GvggfDkQ1PHP-tLSB6KB7Q',
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
