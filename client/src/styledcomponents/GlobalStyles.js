import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: rgb(${(props) => props.theme.text});
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Quicksand', sans-serif;
        transform: translate3d(0);
        scroll-behavior: smooth;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    
    ::-webkit-scrollbar {
        width: 0;
    }
    
    input,
    button {
        width: max-content;
        padding: 1em;
        background: none;
        font-size: 16px;
        border: none;
    }
    input:focus,
    button:focus {
        outline: none;
    }
    button {
        cursor: pointer;
    }
    label {
        font-weight: 700 !important;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover !important;
        object-position: center !important;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight: 800;
    }
`;
