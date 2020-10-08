import styled from 'styled-components';

export default styled.div`
    min-width: 200px;
    max-width: ${(props) => (props.flexwrap ? '220px' : '200px')};
    max-height: ${(props) => (props.flexwrap ? '320px' : '300px')};
    margin-right: 1rem;
    margin-bottom: ${(props) => (props.flexwrap ? '1rem' : '0')};
    width: 100%;
    height: auto;
    border-radius: 5px;
    background-color: rgb(${(props) => props.theme.mediumBackground});

    &:last-of-type {
        margin: 0;
    }

    a {
        display: block;
        padding: 1rem;

        img {
            display: block;
            width: ${(props) => props.imgWidth};
            margin: ${(props) => (props.imgWidth !== '100%' ? '0 auto 1rem auto' : '0 0 1rem 0')};
            height: auto;
            min-height: 172px;
            max-height: 172px;
            object-fit: contain;

            &.dummy-image {
                width: 100%;
                height: 152px;
            }
        }

        .trackName {
            font-weight: 800;
            margin-bottom: 0.5rem;
        }

        .trackOwner {
            font-size: 0.8rem;
            font-weight: 400;
            text-transform: capitalize;
            opacity: 0.6;
            margin-bottom: 0.5rem;
        }
    }
`;
