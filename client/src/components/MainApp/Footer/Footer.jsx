import React from 'react';

// Styled components
import StyledFooter from './StyledFooter';

// Material UI icons
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
    return (
        <StyledFooter>
            <div className='footer__left'>
                <img
                    className='footer__left__albumlogo'
                    src='https://i.pinimg.com/736x/88/0f/ce/880fcec633e280d7e93895db9360aca6.jpg'
                    alt=''
                />
                <div className='song_details'>
                    <p className='song_details__name'>Older</p>
                    <p className='song_details__artist'>Sasha</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayCircleOutlineIcon />
                <SkipNextIcon />
                <RepeatIcon />
            </div>
            <div className='footer__right'>
                <PlaylistPlayIcon />
                <VolumeDownIcon />
            </div>
        </StyledFooter>
    );
};

export default Footer;
