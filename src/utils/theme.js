export const theme = Object.freeze({
  colors: {
    accent: '#dc143c',
    online: '#008000',
    white: '#ffffff',
    grey: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    darkgrey: '#696969',
    lightgrey: '#ebe9e9',
    teal: '#008080',
    lightblue: '#b0c4de',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    //  small: '14px',
    //  medium: '18px',
    //  large: '22px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.2,
    heading: 1.25,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
  //   spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  space: {
    mobileSmall: '320px',
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
  },
});
