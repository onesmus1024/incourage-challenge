import { createGlobalStyle } from "styled-components";

import ApercuBold from "../fonts/apercu-bold.otf";
import ApercuMedium from "../fonts/apercu-medium.otf";
import ApercuRegular from "../fonts/apercu-regular.otf";
import ApercuExtraLight from "../fonts/apercu-extra-light.otf";
import ApercuExtraBold from "../fonts/apercu-extra-bold.otf";

import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#8a8a8a",
    secondary: "#787878",
    tertiary: "#6c6c6c",
    background: "#d1d5db",
    text: "#333333"

  },
  fonts: {
    primary: "Apercu",
    secondary: "Helvetica",
    tertiary: "Arial",
  },
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Apercu';
        font-display: swap;
        font-weight: 400;
        src: local('Apercu Regular'),
        url(${ApercuRegular}) format('opentype');
    }
    @font-face {
        font-family: 'Apercu';
        font-display: swap;
        font-weight: 500;
        src: local('Apercu Medium'),
        url(${ApercuMedium}) format('opentype');
    }

    @font-face {
        font-family: 'Apercu';
        font-display: swap;
        font-weight: 600 700;
        src: local('Apercu Bold'),
        url(${ApercuBold}) format('opentype');
    }

    @font-face {
        font-family: 'Apercu';
        font-display: swap;
        font-weight: 200 300;
        src: local('Apercu Light'),
        url(${ApercuExtraLight}) format('opentype');
    }

    @font-face {
        font-family: 'Apercu';
        font-display: swap;
        font-weight: 800 900;
        src: local('Apercu Extra Bold'),
        url(${ApercuExtraBold}) format('opentype');
    }

    html,
    body,
    #root {
        font-family:Apercu, sans-serif;
        font-size: 16px;
    }

    body * {
        font-family: Apercu, sans-serif;
        ::webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::webkit-scrollbar-track {
            background: transparent;
        }

        ::webkit-scrollbar-thumb {
            background-color: ${theme.colors.primary};
            border-radius: 20px;
            border :none;
        }

        ::webkit-resizer,
        ::-webkit-scrollbar-button,
        ::-webkit-scrollbar-corner{
            display: none;
        }

        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.primary} transparent;


    }

  
`;

export default theme;



   