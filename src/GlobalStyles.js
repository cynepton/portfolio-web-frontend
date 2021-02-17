import { createGlobalStyle } from 'styled-components';
import {
    brandColor3,
    textColor1
} from "./constants/colorStyles";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${brandColor3};
        color: ${textColor1};
        font-size: 16px;
        box-sizing: border-box;
        width: 100vw;
        margin: 0;
        padding: 0;
        *, *:before, *:after {
            box-sizing: inherit;
        }
    }

    #root {
        background-color: transparent;
    }
`;