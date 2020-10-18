import styled from 'styled-components';

export default styled.div`
    margin-top: 1rem;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        margin-top: 2rem;
    }

    .title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            font-size: 2rem;
        }
    }

    .wrapper {
        position: relative;
        height: max-content;
        display: flex;
        flex-wrap: ${(props) => (props.flexwrap ? 'wrap' : 'nowrap')};
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;
