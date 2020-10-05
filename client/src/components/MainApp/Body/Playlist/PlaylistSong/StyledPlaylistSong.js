import styled from 'styled-components';

export default styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: rgb(${(props) => props.theme.darkBackground});
        opacity: 0.8;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        object-fit: cover;
        object-position: center;
        margin-right: 1rem;
    }

    .playlistSong__info {
        margin-left: 1rem;

        h1 {
            font-weight: 600;
        }

        p {
            font-size: 0.8rem;
            margin-top: 0.5rem;
            opacity: 0.6;
        }
    }
`;
