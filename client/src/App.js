import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styledcomponents/GlobalStyles';
import { lightTheme, darkTheme } from './styledcomponents/Themes';
import { ThemeProvider } from 'styled-components';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromResponse, spotifyInstance } from './config/spotify';
import Login from './components/Login/Login';
import MainApp from './components/MainApp/MainApp';

const App = () => {
    const [themeState, setThemeState] = useState('dark');
    const [{ token, playlistId }, dispatch] = useDataLayerValue();

    const theme = {
        ...(themeState === 'light' ? lightTheme : darkTheme),
        breakpoints: {
            lg_tablet: '(min-width: 1024px)',
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
        console.log('access_token', _token);

        if (_token) {
            dispatch({ type: 'SET_TOKEN', token: _token });

            spotifyInstance.setAccessToken(_token);

            spotifyInstance.getMe().then((user) => {
                dispatch({ type: 'SET_USER', user: user });
            });

            spotifyInstance.getUserPlaylists().then((playlists) => {
                dispatch({ type: 'SET_PLAYLISTS', playlists: playlists });
                playlistId === null &&
                    dispatch({ type: 'SET_DETAILED_ID', detailedId: playlists?.items[0]?.id });
            });
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path='/' render={() => (token ? <MainApp /> : <Login />)} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
