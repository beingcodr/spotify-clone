import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyles from './styledcomponents/GlobalStyles';
import { lightTheme, darkTheme } from './styledcomponents/Themes';
import { ThemeProvider } from 'styled-components';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromResponse } from './config/spotify';
import Login from './components/Login/Login';
import MainApp from './components/MainApp/MainApp';

const spotifyInstance = new SpotifyWebApi();

const App = () => {
    const [themeState, setThemeState] = useState('dark');
    const [{ user, token, playlistId }, dispatch] = useDataLayerValue();

    const theme = {
        ...(themeState === 'light' ? lightTheme : darkTheme),
        breakpoints: {
            lg_tablet: 'max-width: 1100px',
            tablet: 'max-width: 770px',
            mobile: 'max-width: 510px',
            sm_mobile: 'max-width: 350px',
        },
    };

    useEffect(() => {
        // Set token
        const hash = getTokenFromResponse();
        window.location.hash = '';
        // let _token = hash.access_token;
        let _token = token ? token : hash.access_token;
        console.log(_token);

        if (_token) {
            dispatch({ type: 'SET_TOKEN', token: _token });

            spotifyInstance.setAccessToken(_token);

            spotifyInstance.getMe().then((user) => {
                dispatch({ type: 'SET_USER', user: user });
            });

            spotifyInstance.getUserPlaylists().then((playlists) => {
                dispatch({ type: 'SET_PLAYLISTS', playlists: playlists });
            });

            spotifyInstance.getNewReleases({ limit: 5 }).then((response) => console.log(response));
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Route path='/'>{token ? <MainApp /> : <Login />}</Route>
            </Router>
        </ThemeProvider>
    );
};

export default App;
