import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../../DataLayer';

// Styled components
import StyledBody from './StyledBody';

// React components
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Home from './Home/Home';

const Body = () => {
    const [{ mainAppState }, dispatch] = useDataLayerValue();

    useEffect(() => {}, [mainAppState]);

    return (
        <StyledBody>
            <Header />
            {mainAppState === '' ? <Home /> : mainAppState === 'playlist' ? <Playlist /> : null}
        </StyledBody>
    );
};

export default Body;
