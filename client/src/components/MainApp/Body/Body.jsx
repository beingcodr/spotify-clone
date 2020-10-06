import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../../DataLayer';

// Styled components
import StyledBody from './StyledBody';

// React components
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Home from './Home/Home';
import Search from '../Search/Search';

const Body = ({ match }) => {
    const [{ mainAppState }, dispatch] = useDataLayerValue();

    useEffect(() => {}, [mainAppState]);

    return (
        <StyledBody>
            {mainAppState === 'search' ? <Header search /> : <Header />}
            {mainAppState === '' ? (
                <Home />
            ) : mainAppState === 'playlist' ? (
                <Playlist />
            ) : mainAppState === 'search' ? (
                <Search />
            ) : null}
        </StyledBody>
    );
};

export default Body;
