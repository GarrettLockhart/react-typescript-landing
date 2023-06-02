import 'styled-components';
interface IPalette {
  main: string;
  contrastText?: string;
  altText?: string;
}

interface IActive {
  active100?: string;
  active200?: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      active: IActive;
    };
  }
}
