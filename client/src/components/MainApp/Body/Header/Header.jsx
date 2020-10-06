import React from 'react';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledHeader from './StyledHeader';

// Material icons
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '../../../Avatar/Avatar';

// React icons
import ChevronLeft from '../../../../react icons/ChevronLeft';
import ChevronRight from '../../../../react icons/ChevronRight';

const Header = ({ search }) => {
    const [{ user, searchQuery }, dispatch] = useDataLayerValue();

    return (
        <StyledHeader>
            <div className='header__left'>
                <p className='header__left__historyBtns'>
                    <ChevronLeft fill='white' width='40px' height='40px' />
                    <ChevronRight fill='white' width='40px' height='40px' />
                </p>
                {search && (
                    <div className='header__left__searchbar'>
                        <SearchIcon />
                        <input
                            onChange={(e) =>
                                dispatch({ type: 'SET_SEARCH_QUERY', searchQuery: e.target.value })
                            }
                            value={searchQuery}
                            type='text'
                            name=''
                            id=''
                            placeholder='Search for artist, songs, etc'
                        />
                    </div>
                )}
            </div>
            <div className='header__right'>
                <Avatar username={user?.display_name} imgUrl={user?.images[0]?.url} />
            </div>
        </StyledHeader>
    );
};

export default Header;
