import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// Styled components
import StyledBody from './StyledBody';

// React components
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Home from './Home/Home';
import Search from '../Search/Search';
import Library from '../Library/Library';

const Body = ({ match }) => {
    let mainAppState = match.params.appState;

    return (
        <StyledBody>
            {mainAppState === 'search' ? (
                <Header search />
            ) : mainAppState === 'library' ? (
                <Header library />
            ) : (
                <Header />
            )}
            {mainAppState === undefined ? (
                <Home />
            ) : mainAppState === 'playlist' ||
              mainAppState === 'album' ||
              mainAppState === 'show' ||
              mainAppState === 'artist' ? (
                <Route
                    exact
                    path={`/${'playlist' || 'album' || 'show' || 'artist'}/:id`}
                    render={(props) => <Playlist {...props} mainAppState={mainAppState} />}
                />
            ) : mainAppState === 'search' ? (
                <Search />
            ) : mainAppState === 'library' ? (
                <Route exact path='/library/:libraryState' component={Library} />
            ) : null}
        </StyledBody>
    );
};

export default Body;
