import React from 'react';

// Styled components
import StyledAvatar from './StyledAvatar';

// images
import dummyAvatar from './dummy-avatar.jpg';

const Avatar = ({ imgUrl, username, displayUsername }) => {
    return (
        <StyledAvatar displayUsername={displayUsername ? true : false}>
            <img src={imgUrl ? imgUrl : dummyAvatar} alt={username} />
            {displayUsername && <p>{username ? username : 'username'}</p>}
        </StyledAvatar>
    );
};

export default Avatar;
