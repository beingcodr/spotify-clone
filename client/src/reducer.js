export const initialState = {
    user: null,
    playLists: [],
    discover_weekly: null,
    playlistId: null,
    playing: false,
    item: null,
    mainAppState: '',
    newReleases: {},
    recentlyPlayedTracks: {},
    searchQuery: '',
    searchResults: {},
    // ! Remove the token after development
    token: null,
    // token:
    //     'BQAMFD3s-5AKnr0kG-3KlA0kFc_hz48Fh__sKU2LoiFB7h3zjRVJ3jOlseE1157DYNsdU19yKcV1OooZm5Ux7RbGujc2PYz0vBhu5NShREU9M9FYXl1rr9myL6eMxCSooIIDw6C4N08eG4b1MgwzotSUWMIwveE-GrDcpfGowOLNVM3c',
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

        case 'SET_NEW_RELEASES':
            return { ...state, newReleases: action.newReleases };

        case 'SET_RECENTLY_PLAYED_TRACKS':
            return { ...state, recentlyPlayedTracks: action.recentlyPlayedTracks };

        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.searchQuery };

        case 'SET_SEARCH_QUERY_RESULTS':
            return { ...state, searchResults: { ...action.searchResults } };

        default:
            return state;
    }
};

export default reducer;
