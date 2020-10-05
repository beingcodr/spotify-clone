import React from 'react';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledHeader from './StyledHeader';

// Material icons
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '../../../Avatar/Avatar';

const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <StyledHeader>
            <div className='header_left'>
                <SearchIcon />
                <input type='text' name='' id='' placeholder='Search for artist, songs, etc' />
            </div>
            <div className='header_right'>
                <Avatar username={user?.display_name} imgUrl={user?.images[0]?.url} />
            </div>
        </StyledHeader>
    );
};

export default Header;
