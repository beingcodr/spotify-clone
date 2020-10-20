import React from 'react';
import { accessUrl } from '../../config/spotify';

// Styled components
import StyledLogin from './StyledLogin';

// Images
import spotifyLogo from '../../react icons/Spotifylogo.png';

const Login = () => {
    return (
        <StyledLogin>
            <img src={spotifyLogo} alt='' />
            <a href={accessUrl}>Login to Spotify</a>
        </StyledLogin>
    );
};

export default Login;
