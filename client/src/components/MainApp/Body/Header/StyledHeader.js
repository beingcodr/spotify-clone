import styled from 'styled-components';

export default styled.div`
    display: flex;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0.5rem 1rem;
    background-color: rgb(${(props) => props.theme.mediumBackground});
    justify-content: space-between;
    z-index: 100;
    overflow: hidden;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        padding: 1rem 2rem;
    }

    .header__left {
        display: flex;
        flex: 0.9;
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            flex: 0.5;
        }

        &__historyBtns {
            flex: 0.2;
            display: flex;
            align-items: center;
            width: max-content;
            margin-right: 1rem;

            svg {
                background-color: rgb(${(props) => props.theme.darkBackground});
                border-radius: 50%;
                fill: rgb(${(props) => props.theme.icon});

                &:first-child {
                    margin-right: 0.2rem;
                }

                &:hover {
                    cursor: pointer;
                    transition: 0.4s ease-in-out;
                    fill: rgb(${(props) => props.theme.text});
                }
            }
        }

        &__searchbar {
            flex: 1;
            min-width: 70px;
            background-color: white;
            color: rgb(${(props) => props.theme.text});
            border-radius: 30px;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            @media ${(props) => props.theme.breakpoints.lg_tablet} {
                flex: 0.8;
            }

            svg {
                fill: rgb(${(props) => props.theme.icon});
            }

            input {
                color: rgb(${(props) => props.theme.darkBackground});
                width: 100%;
            }
        }

        &__librarybar {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                display: block;
                margin-right: 1rem;
                padding: 0.8rem 1rem;
                text-transform: capitalize;
                transition: 0.4s ease-in-out;

                &.active {
                    padding: 0.8rem 1rem;
                    border-radius: 5px;
                    background-color: rgb(${(props) => props.theme.darkBackground});
                }
            }
        }
    }

    .header__right {
        display: flex;
        align-items: center;
    }
`;
