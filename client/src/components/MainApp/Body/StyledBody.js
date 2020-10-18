import styled from 'styled-components';

export default styled.div`
    position: relative;
    background: linear-gradient(
        rgb(${(props) => props.theme.constants.purple}),
        rgb(${(props) => props.theme.constants.darkText})
    );
    flex: 1;
    overflow: auto;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        flex: 1;
    }
`;
