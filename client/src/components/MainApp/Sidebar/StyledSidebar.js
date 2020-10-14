import styled from 'styled-components';

export default styled.div`
    display: none;
    @media ${props => props.theme.breakpoints.lg_tablet} {
      display: inline;
      flex: 0.9;
      height: 100%;
      max-width: 230px;
      padding: 1rem 0.5rem;
      background: rgb(${(props) => props.theme.darkBackground});
      overflow-y: scroll;
      padding-bottom: 80px;
    }
    img {
        display: block;
        margin-right: auto;
        width: 60%;
        height: 50px;
        object-fit: contain;
    }
    .sidebar-mobile-wrapper {
      display: block;
      @media ${props => props.theme.breakpoints.lg_tablet} {
        display: none;
      }
    }
`;
