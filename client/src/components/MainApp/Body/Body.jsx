import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../../DataLayer';

// Styled components
import StyledBody from './StyledBody';

// React components
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Home from './Home/Home';
import Search from '../Search/Search';
import Library from '../Library/Library';

const Body = () => {
    const [{ mainAppState }, dispatch] = useDataLayerValue();
    // localStorage.setItem('mainAppState', mainAppState);

    useEffect(() => {
        // const localAppState = localStorage.getItem('mainAppState');
        // localAppState
        //     ? dispatch({ type: 'SET_MAINAPPSTATE', state: localAppState })
        //     : dispatch({ type: 'SET_MAINAPPSTATE', state: mainAppState });
    }, [mainAppState]);

    return (
        <StyledBody>
            {mainAppState === 'search' ? <Header search /> : <Header />}
            {mainAppState === '' ? (
                <Home />
            ) : mainAppState === 'playlist' ? (
                <Playlist />
            ) : mainAppState === 'search' ? (
                <Search />
            ) : mainAppState === 'library' ? (
                <Library />
            ) : null}
        </StyledBody>
    );
};

export default Body;
