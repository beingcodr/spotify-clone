import styled from 'styled-components';

export default styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background-color: rgb(${(props) => props.theme.darkBackground});

    img {
        max-width: 80%;
        width: auto;
        height: auto;
    }

    a {
        padding: 1rem 2rem;
        border-radius: 30px;
        background-color: rgb(${(props) => props.theme.constants.colorBackground});
        color: ${(props) => props.theme.text};
        font-weight: 600;
        text-transform: uppercase;
    }
`;
