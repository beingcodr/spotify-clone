export const initialState = {
    user: null,
    playLists: [],
    mainAppState: '',
    libraryState: 'playlists',
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
    token: null,
    token:
        'BQDXBhgnN85_M7_Ejg2YDFT1Yfg9DUe9-y9UJ6DVf3cxk5lWmPJ350ePf9ao9KUCt7Hq8JPh-DFx0fMAu4LTodoymSIW5dF9Im6aaK1lQjUbX_7--6jc35vjmXRvxBvfbzk2HqHAcVblNlcH_RHogy-uF_lmyRtDtCHNre4ObizPqkfJaZM-KIP0duWHTA',
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

        case 'SET_MAINAPPSTATE':
            return { ...state, mainAppState: action.state };

        case 'SET_LIBRARYSTATE':
            return { ...state, libraryState: action.state };

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
