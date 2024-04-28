import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
  },
  fonts: {
    body: 'var(--font-open-sans)',
    heading: 'var(--font-open-sans)',
  },
})
