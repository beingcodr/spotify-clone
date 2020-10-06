import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .header__left {
        display: flex;
        flex: 0.5;

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
            flex: 0.8;
            min-width: 70px;
            background-color: white;
            color: rgb(${(props) => props.theme.text});
            border-radius: 30px;
            padding: 0 1rem;
            display: flex;
            align-items: center;

            svg {
                fill: rgb(${(props) => props.theme.icon});
            }

            input {
                color: rgb(${(props) => props.theme.darkBackground});
                width: 100%;
            }
        }
    }

    .header__right {
        display: flex;
        align-items: center;
    }
`;
