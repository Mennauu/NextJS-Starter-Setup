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
