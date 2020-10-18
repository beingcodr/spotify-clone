import styled from 'styled-components';

export default styled.div`
    position: fixed;
    bottom: 55px;
    height: 80px;
    width: 100%;
    padding: 0;
    background: rgb(${(props) => props.theme.lightBackground});
    display: flex;
    justify-content: space-between;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        padding: 1rem;
        bottom: 0;
    }
    .footer__left {
        flex: 0.3;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;

        &__albumlogo {
            width: auto;
            height: 100%;
            margin-right: 1rem;
            @media ${(props) => props.theme.breakpoints.lg_tablet} {
                width: 50px;
                height: 50px;
                border-radius: 5px;
            }
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
