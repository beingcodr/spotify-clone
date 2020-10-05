import styled from 'styled-components';

export default styled.div`
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 100%;
    background: rgb(${(props) => props.theme.lightBackground});
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    .footer__left {
        flex: 0.3;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;

        &__albumlogo {
            width: 50px;
            height: 50px;
            margin-right: 1rem;
            border-radius: 5px;
        }

        .song_details {
            &__name {
                font-weight: 600;
                margin-bottom: 0.2rem;
            }

            &__artist {
                font-size: 0.8rem;
            }
        }
    }

    .footer__center {
        flex: 0.4;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        svg {
            transition: 0.2s linear;

            &:hover {
                transform: scale(1.4);
            }
        }
    }

    .footer__right {
        flex: 0.3;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;
