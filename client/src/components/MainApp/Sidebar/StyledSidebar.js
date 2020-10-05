import styled from 'styled-components';

export default styled.div`
    flex: 0.2;
    height: 100%;
    min-width: 230px;
    padding: 1rem 0.5rem;
    background: rgb(${(props) => props.theme.darkBackground});

    img {
        display: block;
        margin-right: auto;
        width: 60%;
        height: 50px;
        object-fit: contain;
    }
`;
