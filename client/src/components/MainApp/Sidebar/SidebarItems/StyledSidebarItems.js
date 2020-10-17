import styled from 'styled-components';

export default styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    overflow-y: scroll;
    @media ${props => props.theme.breakpoints.lg_tablet} {
      padding: 1rem 0 1rem 1rem;
      flex-direction: column;
    }
    &::-webkit-scrollbar {
        width: 0;
    }

    h1 {
        text-transform: uppercase;
        font-size: 0.8rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgb(${(props) => props.theme.text});
        width: 90%;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.5);
    }

    &:first-of-type {
      margin: 0;
      @media ${props => props.theme.breakpoints.lg_tablet} {
        margin-top: 1rem;
      }
    }

    .sidebarItems {
        padding: 1rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        transition: 0.4s ease-in-out;
        opacity: 0.6;
        @media ${props => props.theme.breakpoints.lg_tablet} {
          flex-direction: row;
        }
        &.active {
            opacity: 1;
            font-weight: 800;
        }

        &__icon {
          @media ${props => props.theme.breakpoints.lg_tablet} {
            margin-right: 1rem;
          }
        }

        &__option {
          margin-top: 5px;
          font-size: 0.9rem;
          text-transform: capitalize;
          @media ${props => props.theme.breakpoints.lg_tablet} {
            margin-top: 0;
            font-size: 1rem;
          } 
        }

        &:hover {
            opacity: 1;
        }

        p {
            font-size: 0.8rem;
        }
    }
`;
