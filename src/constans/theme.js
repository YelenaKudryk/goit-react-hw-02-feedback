export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primaryText: '#271c12',
    secondaryText: '#3e2d1c',
    backgroundBody: '#dbddd2',
    accentColor: '#647256',
  },
  spacing: value => `${4 * value}px`,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #757575',
  },
  radius: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
