import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

// Styled components
import StyledBody from './StyledBody';

// React components
import Header from './Header/Header';
import DetailedComp from './DetailedComp/DetailedComp';
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
              mainAppState === 'track' ||
              mainAppState === 'album' ||
              mainAppState === 'show' ||
              mainAppState === 'artist' ? (
                <Route
                    exact
                    path={`/${mainAppState}/:id`}
                    render={(props) => <DetailedComp {...props} mainAppState={mainAppState} />}
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
