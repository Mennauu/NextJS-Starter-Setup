import { createGlobalTheme } from '@vanilla-extract/css'

const breakpoints = {
  mobilePlus: '480px',
  tabletPortrait: '768px',
  tabletLandscape: '1024px',
  desktop: '1440px',
}

export const vars = createGlobalTheme(':root', {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#D9E8FB',
    grayDark: '#6E829B',
    blue: '#001EE6',
  },
  fonts: {
    body: 'var(--font-open-sans)',
    heading: 'var(--font-open-sans)',
  },
  breakpoints: {
    mobilePlus: breakpoints.mobilePlus,
    tabletPortrait: breakpoints.tabletPortrait,
    tabletLandscape: breakpoints.tabletLandscape,
    desktop: breakpoints.desktop,
  },
  radius: {
    sm: '4px',
    md: '8px',
  },
  spacer: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
  },
})

export const mediaQueries = {
  mobilePlusAndBigger: `@media screen and (min-width: ${breakpoints.mobilePlus})`,
  tabletPortraitAndBigger: `@media screen and (min-width: ${breakpoints.tabletPortrait})`,
  tabletLandscapeAndBigger: `@media screen and (min-width: ${breakpoints.tabletLandscape})`,
  desktopAndBigger: `@media screen and (min-width: ${breakpoints.desktop})`,
}
