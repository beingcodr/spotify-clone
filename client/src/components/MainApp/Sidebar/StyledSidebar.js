import styled from 'styled-components';

export default styled.div`
    flex: 0.1;
    height: 100%;
    min-width: 230px;
    padding: 1rem 0.5rem;
    background: rgb(${(props) => props.theme.darkBackground});

    img {
        display: block;
        margin-right: auto;
        padding-left: 1rem;
        width: 80%;
        height: auto;
        object-fit: contain;
    }
`;
