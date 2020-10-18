import styled from 'styled-components';

export default styled.div`
    display: flex;
    align-items: center;
    padding: ${(props) => (props.displayUsername ? '0.2rem 1rem 0.2rem 0.2rem' : '0.2rem')};
    border-radius: 30px;
    background-color: rgb(${(props) => props.theme.darkBackground});

    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        margin-right: ${(props) => (props.displayUsername ? '0.5rem' : '0')};
        border-radius: 50%;
    }
`;
