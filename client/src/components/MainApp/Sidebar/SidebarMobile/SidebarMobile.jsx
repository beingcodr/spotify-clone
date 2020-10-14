import React from 'react';
import { useDataLayerValue } from '../../../../DataLayer';

// Styled components
import StyledSidebarMobile from './StyledSidebarMobile';

// React icons
import HomeIcon from '../../../../react icons/HomeIcon';
import SearchIcon from '../../../../react icons/SearchIcon';
import MusicLibraryIcon from '../../../../react icons/MusicLibraryIcon';

// React components
import SidebarItems, { SidebarOptions } from '../SidebarItems/SidebarItems';

const Sidebar = () => {
  const [dispatch] = useDataLayerValue();

  return (
    <StyledSidebarMobile>
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
    </StyledSidebarMobile>
  );
};

export default Sidebar;
