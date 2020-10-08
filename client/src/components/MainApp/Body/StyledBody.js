import styled from 'styled-components';

export default styled.div`
    background: linear-gradient(
        rgb(${(props) => props.theme.constants.purple}),
        rgb(${(props) => props.theme.constants.darkText})
    );
    flex: 0.9;
    padding: 1rem 2rem 10rem 2rem;
    overflow: auto;
`;
