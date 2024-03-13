import { DefaultTheme } from "styled-components";


declare module "styled-components" {

    interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            text: string;
        };
        fonts: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
    }

}


export default DefaultTheme;