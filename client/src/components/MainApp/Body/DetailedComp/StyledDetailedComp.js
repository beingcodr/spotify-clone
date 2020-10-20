import styled from 'styled-components';

export default styled.div`
    padding: 2rem 1rem 10rem 1rem;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        padding: 2rem 2rem 10rem 2rem;
    }

    .detailed__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        padding: 0.5rem;
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            flex-direction: row;
        }

        img {
            width: 60vw;
            height: auto;
            margin: 0 auto;
            object-fit: contain;
            box-shadow: 0 4px 60px rgba(0, 0, 0, 0.6);
            @media ${(props) => props.theme.breakpoints.lg_tablet} {
                width: auto;
                height: 20vw;
                margin: 0 1rem 0 0;
            }
        }

        &__text {
            flex: 1;
            margin: 1rem auto 0 auto;
            text-align: center;
            @media ${(props) => props.theme.breakpoints.lg_tablet} {
                text-align: left;
            }

            strong {
                text-transform: uppercase;
            }

            h4 {
                font-size: 1.5rem;
                text-transform: capitalize;
                font-family: 'Montserrat', sans-serif;
                @media ${(props) => props.theme.breakpoints.lg_tablet} {
                    font-size: 3rem;
                }
            }
        }
    }

    .detailed__songs {
        &__icons {
            display: flex;
            align-items: center;
            margin: 1rem 0;

            svg {
                margin-right: 1rem;
            }

            .detailed__shuffle {
                font-size: 4rem;
            }
        }
    }
`;
