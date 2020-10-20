import styled from 'styled-components';

export default styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 5px;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        padding: 1rem;
    }

    &:hover {
        cursor: pointer;
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            opacity: 0.8;
            background-color: rgb(${(props) => props.theme.darkBackground});
        }
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        object-fit: cover;
        object-position: center;
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            width: 50px;
            height: 50px;
        }
    }

    .detailedSong__info {
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
