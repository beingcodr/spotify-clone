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
    // ! Remove the token after development
    token: null,
    token:
        'BQACLZPlrZavGypSS-DCdq576b9yw1e0pTP4xc8ra9u040nOPDdK_TPDlgJr4UCUMnlGAfok46cg8I_gyIwp5lLvu73uC8r7D2RkhKZhw5Kg9lIrxPhPnH1_07nq6WT9zaQlswGxk__qT7aoDNjc50sZLbWUZYg0Id_zxCKd0dHTGEH8',
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

        default:
            return state;
    }
};

export default reducer;
