export const initialState = {
    user: null,
    playLists: [],
    discover_weekly: null,
    savedShows: {},
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
    //     'BQBgFwDkZWjxDTek4BdsKfLLTfVHEhWg1fgfdYA_bBj8726UizIuDOC6OnaOGmcaeprTEYOXyzSweAuQueq-pZMvOd6712h65asukAlNTow0BXUehtGAtbRvm9mcbJProf-vrvV500WnNlf0sgVEpJi_DZPRmqbiv4aqX_zHitEWoBCvf5AZidAr',
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

        case 'SET_SAVED_SHOWS':
            return { ...state, savedShows: action.savedShows };

        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.searchQuery };

        case 'SET_SEARCH_QUERY_RESULTS':
            return { ...state, searchResults: { ...action.searchResults } };

        default:
            return state;
    }
};

export default reducer;
