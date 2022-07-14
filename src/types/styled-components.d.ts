import { Colors, FontSizes, Media } from 'libs/style/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSizes;
    colors: Colors;
    media: Media;
  }
}
