import styled from 'styled-components';

export default styled.div`
    min-width: 120px;
    max-width: ${(props) => (props.mutable ? '100%' : '120px')};
    max-height: ${(props) => (props.mutable ? 'auto' : '250px')};
    margin-right: 1rem;
    margin-bottom: ${(props) => (props.mutable ? '1rem' : '0')};
    width: 100%;
    overflow: hidden;
    @media ${(props) => props.theme.breakpoints.lg_tablet} {
        min-width: 200px;
        max-width: 200px;
        max-height: ${(props) => (props.mutable ? '320px' : '300px')};
        margin-right: 1rem;
        margin-bottom: ${(props) => (props.mutable ? '1rem' : '0')};
        width: 100%;
        height: auto;
        border-radius: 5px;
        background-color: rgb(${(props) => props.theme.mediumBackground});
    }

    &:last-of-type {
        margin: 0;
    }

    a {
        height: 100%;
        width: 100%;
        display: ${(props) => (props.mutable ? 'flex' : 'block')};
        @media ${(props) => props.theme.breakpoints.lg_tablet} {
            display: block;
            padding: 1rem;
        }

        img {
            display: block;
            width: ${(props) => (props.mutable ? '60px' : '100%')};
            height: ${(props) => (props.mutable ? '60px' : '100%')};
            margin: ${(props) => (props.mutable ? '0 1rem 0 0' : '0 0 1rem 0')};
            min-height: ${(props) => (props.mutable ? '60px' : '122px')};
            max-height: ${(props) => (props.mutable ? '60px' : '122px')};
            height: auto;
            object-fit: contain;
            border-radius: ${(props) => (props.mutable ? '5px' : '0')};
            @media ${(props) => props.theme.breakpoints.lg_tablet} {
                margin: 0 0 1rem 0;
                min-height: 172px;
                max-height: 172px;
                width: 100%;
                border-radius: 0;
            }

            &.dummy-image {
                width: 100%;
                height: 152px;
            }
        }

        .trackInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;

            &__trackName {
                font-size: 1rem;
                font-weight: 800;
                margin-bottom: ${(props) => (props.mutable ? '0' : '.5rem')};
                @media ${(props) => props.theme.breakpoints.lg_tablet} {
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                }
            }

            &__trackOwner {
                font-size: 0.8rem;
                font-weight: 400;
                text-transform: capitalize;
                opacity: 0.6;
                margin-bottom: ${(props) => (props.mutable ? '0' : '.5rem')};
                @media ${(props) => props.theme.breakpoints.lg_tablet} {
                    margin-bottom: 0.5rem;
                }
            }
        }
    }
`;
