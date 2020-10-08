import styled from 'styled-components';

export default styled.div`
    padding: 1rem 0 1rem 1rem;
    overflow-y: scroll;

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
        margin-top: 1rem;
    }

    .sidebarItems {
        padding: 1rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.4s ease-in-out;
        opacity: 0.6;

        &.active {
            opacity: 1;
            font-weight: 800;
        }

        &__icon {
            margin-right: 1rem;
        }

        &__option {
            text-transform: capitalize;
        }

        &:hover {
            opacity: 1;
        }

        p {
            font-size: 0.8rem;
        }
    }
`;
