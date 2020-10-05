import styled from 'styled-components';

export default styled.div`
    .playlist__info {
        display: flex;
        align-items: flex-end;
        padding: 0.5rem;

        img {
            width: auto;
            height: 20vw;
            margin: 0 1rem 0 0;
            object-fit: contain;
            box-shadow: 0 4px 60px rgba(0, 0, 0, 0.6);
        }

        &__text {
            flex: 1;

            strong {
                text-transform: uppercase;
            }

            h4 {
                font-size: 3rem;
                text-transform: capitalize;
                font-family: 'Montserrat', sans-serif;
            }
        }
    }

    .playlist__songs {
        &__icons {
            display: flex;
            align-items: center;
            margin: 1rem 0;

            svg {
                margin-right: 1rem;
            }

            .playlist__shuffle {
                font-size: 4rem;
            }
        }
    }
`;
