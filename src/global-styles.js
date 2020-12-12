import { createGlobalStyle } from 'styled-components';
import { 
    brandColorBackground, brandColorText 
} from './constants/styleConstants';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${brandColorBackground};
        color: ${brandColorText};
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
        display: flex;
        flex-direction: column;
    }
`;