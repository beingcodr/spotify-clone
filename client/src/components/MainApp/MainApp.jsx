import React from 'react';

// Styled components
import StyledMainApp from './StyledMainApp';

// React components
import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import Footer from './Footer/Footer';

const MainApp = () => {
    return (
        <StyledMainApp>
            <div className='mainApp__body'>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </StyledMainApp>
    );
};

export default MainApp;
