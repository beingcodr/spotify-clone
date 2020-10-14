import styled from 'styled-components';

const StyledSidebarMobile = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    z-index: 99;
    background: black;
    @media ${props => props.theme.breakpoints.lg_tablet} {
      display: none;
    }
`;

export default StyledSidebarMobile;