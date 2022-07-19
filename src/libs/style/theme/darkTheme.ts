import { fontSizes, media } from './defaultTheme';

export type Colors = typeof colors;

const colors = {
  backgroundColor: '#35393b',
  whiteColor: '#3b3f41',
  blueColor: '#5869f0',
  lightBlueColor: '#878fc4',
  fontColor: '#e8e5dd',
  lightGrayColor: '#d9d3c7',
  redColor: '#ea3a4a',
  greenColor: '#85da47',
};

const darkTheme = {
  fontSizes,
  colors,
  media,
};

export default darkTheme;
