import styled from 'styled-components';

export default styled.div`
    padding: 0 1rem 10rem 1rem;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        padding: 0 2rem 10rem 2rem;
    }
`;
