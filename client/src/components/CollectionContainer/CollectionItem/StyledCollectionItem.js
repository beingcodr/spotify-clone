import styled from 'styled-components';

export default styled.div`
    min-width: 200px;
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgb(${(props) => props.theme.mediumBackground});

    img {
        display: block;
        width: 100%;
        height: auto;
        max-height: 152px;
        object-fit: contain;
        margin-bottom: 1rem;

        &.dummy-image {
            width: 100%;
            height: 152px;
        }
    }

    .trackName {
        font-weight: 800;
        margin-bottom: 0.5rem;
    }

    .trackOwner {
        font-size: 0.8rem;
        font-weight: 400;
        text-transform: capitalize;
        opacity: 0.6;
        margin-bottom: 0.5rem;
    }
`;
