import './reset.css'
import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

globalStyle('body', {
  minWidth: '320px',
  wordBreak: 'normal',
  fontFamily: vars.fonts.body,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.fonts.heading,
})

globalStyle('p', {})

globalStyle('img', {})

globalStyle('input', {
  padding: `${vars.spacer[3]} ${vars.spacer[4]}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.colors.gray}`,
  fontSize: '1rem',
})

globalStyle('input::placeholder', {
  color: vars.colors.grayDark,
  fontSize: '0.875rem',
})

globalStyle('button', {
  color: vars.colors.white,
  backgroundColor: vars.colors.blue,
  padding: `${vars.spacer[3]} ${vars.spacer[4]}`,
  fontWeight: '600',
  borderRadius: vars.radius.md,
  minHeight: '48px',
})
