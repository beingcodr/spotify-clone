import React from 'react';
import { accessUrl } from '../../config/spotify';

// Styled components
import StyledLogin from './StyledLogin';

const Login = () => {
    return (
        <StyledLogin>
            This is the login page
            <a href={accessUrl}>Login to Spotify</a>
        </StyledLogin>
    );
};

export default Login;
