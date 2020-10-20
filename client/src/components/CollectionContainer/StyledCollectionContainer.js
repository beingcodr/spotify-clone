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
        flex-wrap: ${(props) => (props.mutable ? 'wrap' : 'nowrap')};
        flex-direction: ${(props) => (props.mutable ? 'column' : 'row')};
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            flex-direction: row;
        }

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;
