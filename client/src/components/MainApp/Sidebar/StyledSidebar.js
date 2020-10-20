import styled from 'styled-components';

const StyledSidebar = styled.div`
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.5rem 0;
    height: auto;
    z-index: 99;
    background: rgb(${(props) => props.theme.darkBackground});
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        position: relative;
        z-index: 0;
        flex: 0.9;
        height: 100%;
        max-width: 230px;
        padding: 1rem 0.5rem;
        overflow-y: scroll;
        padding-bottom: 80px;
    }

    img {
        display: block;
        margin-right: auto;
        padding-left: 1rem;
        width: 80%;
        height: auto;
        object-fit: contain;
    }
`;

export default StyledSidebar;
