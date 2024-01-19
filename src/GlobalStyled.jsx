import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Fira Code', monospace;
        font-family: 'Poppins', sans-serif;
    }

    html {
        width: auto;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #f5f5f5;

    }
`

