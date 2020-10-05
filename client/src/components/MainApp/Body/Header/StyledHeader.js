import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .header_left {
        flex: 0.5;
        min-width: 70px;
        background-color: white;
        color: rgb(${(props) => props.theme.text});
        border-radius: 30px;
        padding: 0 1rem;
        display: flex;
        align-items: center;

        input {
            width: 100%;
        }
    }

    .header__right {
        display: flex;
        align-items: center;

        img {
            margin-right: 1rem;
        }
    }
`;
