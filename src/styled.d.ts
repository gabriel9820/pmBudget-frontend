// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      textPrimary: string;
      textSecondary: string;
      white: string;
      green: string;
      red: string;
      darkGray: string;
      background: string;
    };
    logo: string;
  }
}
