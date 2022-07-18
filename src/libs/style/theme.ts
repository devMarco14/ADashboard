export type FontSizes = typeof fontSizes;
const fontSizes = {
  xsmall: '10px',
  small: '12px',
  medium: '14px',
  large: '16px',
  xlarge: '18px',
  xxlarge: '20px',
};

export type Colors = typeof colors;
const colors = {
  backgroundColor: '#f6f7f9',
  whiteColor: '#fcfcfc',
  blueColor: '#596cf6',
  lightBlueColor: '#878fc4',
  fontColor: '#595f62',
  lightGrayColor: '#c8ced8',
  redColor: '#ea3a4a',
  greenColor: '#85da47',
};

export const mediaQuery = (maxWidth: number) => `
@media (max-width: ${maxWidth}px)
`;

export type Media = typeof media;
const media = {
  xxlarge: mediaQuery(2020),
  xlarge: mediaQuery(1640),
  large: mediaQuery(1250),
  medium: mediaQuery(1000),
  small: mediaQuery(900),
  xsmall: mediaQuery(640),
  xxsmall: mediaQuery(480),
  custom: mediaQuery,
};

const theme = {
  fontSizes,
  colors,
  media,
};

export default theme;
