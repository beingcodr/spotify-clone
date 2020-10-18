import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDataLayerValue } from '../../../../DataLayer';
import useWindowSize from '../../../../utils/useWindowSize';

// Styled components
import StyledHeader from './StyledHeader';

// Material icons
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '../../../Avatar/Avatar';

// React icons
import ChevronLeft from '../../../../react icons/ChevronLeft';
import ChevronRight from '../../../../react icons/ChevronRight';

const Header = ({ search, library }) => {
    const [{ user, searchQuery }, dispatch] = useDataLayerValue();
    const history = useHistory();
    const windowSize = useWindowSize();

    const dispatchLibraryState = (state) => {
        dispatch({ type: 'SET_LIBRARYSTATE', state: state });
    };

    return (
        <StyledHeader>
            <div className='header__left'>
                {windowSize?.width >= 1024 && (
                    <p className='header__left__historyBtns'>
                        <ChevronLeft
                            onClick={() => history.goBack()}
                            fill='white'
                            width='40px'
                            height='40px'
                        />
                        <ChevronRight
                            onClick={() => history.goForward()}
                            fill='white'
                            width='40px'
                            height='40px'
                        />
                    </p>
                )}
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
                {library && (
                    <div className='header__left__librarybar'>
                        <NavLink to='playlists' onClick={() => dispatchLibraryState('playlists')}>
                            playlists
                        </NavLink>
                        <NavLink to='podcasts' onClick={() => dispatchLibraryState('podcasts')}>
                            podcasts
                        </NavLink>
                        <NavLink to='artists' onClick={() => dispatchLibraryState('artists')}>
                            artists
                        </NavLink>
                        <NavLink to='albums' onClick={() => dispatchLibraryState('albums')}>
                            albums
                        </NavLink>
                    </div>
                )}
            </div>
            <div className='header__right'>
                <Avatar
                    username={user?.display_name}
                    imgUrl={user?.images[0]?.url}
                    displayUsername={windowSize?.width <= 1024 ? false : true}
                />
            </div>
        </StyledHeader>
    );
};

export default Header;
