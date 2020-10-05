import React from 'react';

// Styled components
import StyledAvatar from './StyledAvatar';

// images
import dummyAvatar from './dummy-avatar.jpg';

const Avatar = ({ imgUrl, username }) => {
    return (
        <StyledAvatar>
            <img src={imgUrl ? imgUrl : dummyAvatar} alt={username} />
            <p>{username ? username : 'username'}</p>
        </StyledAvatar>
    );
};

export default Avatar;
