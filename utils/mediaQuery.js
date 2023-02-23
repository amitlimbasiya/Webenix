export const breakpoints = {
  xs: 375,
  xxs: 480,
  sm: 575,
  mobile: 767,
  md: 768,
  tablet: 991,
  lg: 1024,
  llg: 1199,
  xl: 1366,
  xlx: 1439,
  xll: 1440,
  xxl: 1600,
};

export const mediaQueries = (key) => (style) =>
  `@media (max-width: ${breakpoints[key]}px) { ${style} }`;

export const mediaQueriesmin = (key) => (style) =>
  `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
