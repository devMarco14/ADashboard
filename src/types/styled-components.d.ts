import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    media: {
      xsmall: string;
    };
  }
}
