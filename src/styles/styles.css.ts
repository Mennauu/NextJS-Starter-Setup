import { style } from '@vanilla-extract/css'
import { mediaQueries, vars } from './theme.css'

export const container = style({
  maxWidth: '100%',
  paddingLeft: vars.spacer[4],
  paddingRight: vars.spacer[4],
  marginLeft: 'auto',
  marginRight: 'auto',

  [mediaQueries.tabletPortraitAndBigger]: {
    paddingLeft: vars.spacer[8],
    paddingRight: vars.spacer[8],
  },
})
