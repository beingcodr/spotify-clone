import styled from 'styled-components';

export default styled.div`
    margin-top: 2rem;

    .title {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
    }

    .wrapper {
        height: max-content;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;

        &__trackContainer {
            min-width: 200px;
            padding: 1.5rem;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: rgb(${(props) => props.theme.mediumBackground});

            img {
                display: block;
                width: 100%;
                height: auto;
                object-fit: contain;
                margin-bottom: 1rem;
            }

            &__trackName {
                font-weight: 800;
                margin-bottom: 0.5rem;
            }

            &__trackOwner {
                font-size: 0.8rem;
                font-weight: 400;
                opacity: 0.6;
                margin-bottom: 0.5rem;
            }
        }
    }
`;
