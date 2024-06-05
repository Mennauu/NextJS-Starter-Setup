import { vars } from '@/src/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const countryFormWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '480px',
})

export const countryForm = style({
  display: 'flex',
})

export const countryFormInput = style({
  width: '100%',
})

export const countryFormButton = style({
  marginLeft: '-6px',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
})

export const countryFormResults = style({
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  borderBottomLeftRadius: vars.radius.md,
  borderBottomRightRadius: vars.radius.md,
  overflow: 'hidden',
  marginTop: '-4px',
})

export const countryFormResultsButton = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: 0,
  backgroundColor: vars.colors.gray,
  color: vars.colors.grayDark,
  borderBottom: `1px solid ${vars.colors.white}`,
})

export const countryFormResultsFlag = style({
  width: '16px',
  height: '16px',
  marginRight: vars.spacer[3],
  display: 'flex',
  alignItems: 'center',
})
