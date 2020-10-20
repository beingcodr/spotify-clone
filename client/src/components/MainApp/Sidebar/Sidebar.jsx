import React from 'react';
import { useDataLayerValue } from '../../../DataLayer';

// Styled components
import StyledSidebar from './StyledSidebar';

// React icons
import spotifyLogo from '../../../react icons/Spotifylogo.png';
import HomeIcon from '../../../react icons/HomeIcon';
import SearchIcon from '../../../react icons/SearchIcon';
import MusicLibraryIcon from '../../../react icons/MusicLibraryIcon';

// React components
import SidebarItems, { SidebarOptions } from './SidebarItems/SidebarItems';
import useWindowSize from '../../../utils/useWindowSize';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    const windowSize = useWindowSize();
    const windowSizeCalc = windowSize.width >= 1024;

    return (
        <>
            <StyledSidebar>
                {windowSizeCalc && <img src={spotifyLogo} alt='spotify logo' />}
                <SidebarItems>
                    <SidebarOptions link='/' name='home' Icon={HomeIcon} />
                    <SidebarOptions link='/search' name='search' Icon={SearchIcon} />
                    <SidebarOptions
                        link='/library/playlists'
                        name='your library'
                        Icon={MusicLibraryIcon}
                        onClick={() => dispatch({ type: 'SET_LIBRARYSTATE', state: 'playlists' })}
                    />
                </SidebarItems>
                {windowSizeCalc && (
                    <SidebarItems title='playlists'>
                        {playlists?.items?.length > 0 ? (
                            playlists?.items.map((playlist) => {
                                return (
                                    <SidebarOptions
                                        key={playlist.id}
                                        link={`/playlist/${playlist.id}`}
                                        id={playlist.id}
                                        name={playlist.name}
                                        onClick={() =>
                                            dispatch({
                                                type: 'SET_DETAILED_ID',
                                                detailedId: playlist.id,
                                            })
                                        }
                                    />
                                );
                            })
                        ) : (
                            <SidebarOptions name='No playlists' />
                        )}
                    </SidebarItems>
                )}
            </StyledSidebar>
        </>
    );
};

export default Sidebar;
