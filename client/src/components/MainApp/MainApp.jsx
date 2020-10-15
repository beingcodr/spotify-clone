import React from 'react';
import { Route } from 'react-router-dom';

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
                <>
                    <Route exact path='/' component={Body} />
                    <Route exact path='/:appState' component={Body} />
                    <Route exact path='/:appState/:id' component={Body} />
                </>
            </div>
            <Footer />
        </StyledMainApp>
    );
};

export default MainApp;
