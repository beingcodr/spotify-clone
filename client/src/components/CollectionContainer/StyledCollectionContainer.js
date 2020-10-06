import styled from 'styled-components';

export default styled.div`
    margin-top: 2rem;

    .title {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
    }

    .wrapper {
        height: max-content;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        grid-gap: 1rem;
    }
`;
