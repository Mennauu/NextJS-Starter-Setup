import { globalStyle } from '@vanilla-extract/css'

/**
 * 1. Prevent iOS text size adjust after orientation change,
 *    without disabling user zoom.
 */

globalStyle('*, *:before, *:after', {
  margin: 0,
  padding: 0,
})

globalStyle('*:focus', { outline: 'none' })

globalStyle('body, html', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  width: '100%',
})

globalStyle('html', {
  WebkitTextSizeAdjust: '100%' /* 1 */,
})

globalStyle('body', {
  minHeight: '100vh',
  margin: 0,
})

globalStyle('html, body, button, a, input', {
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

globalStyle(
  `article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section, summary`,
  { display: 'block' },
)

globalStyle('iframe', {
  border: 0,
  display: 'block',
})

globalStyle('img, svg', { verticalAlign: 'middle' })

globalStyle('select', { maxWidth: '100%' })

globalStyle(`audio, canvas, progress, video`, {
  display: 'inline-block',
  verticalAlign: 'baseline',
})

globalStyle(`audio:not([controls])`, {
  display: 'none',
  height: '0',
})

globalStyle(`[hidden], template`, { display: 'none' })

globalStyle('a', { backgroundColor: 'transparent' })
globalStyle(`a:active, a:hover`, { outline: '0' })

globalStyle('abbr[title]', { borderBottom: '1px dotted' })

globalStyle('b, strong', { fontWeight: 'bold' })

globalStyle('dfn', { fontStyle: 'italic' })

globalStyle('mark', {
  background: '#ff0',
  color: '#000',
})

globalStyle('small', { fontSize: '80%' })

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
})

globalStyle('sup', { top: '-0.5em' })
globalStyle('sub', { bottom: '-0.25em' })

globalStyle('img', { border: '0' })
globalStyle('svg:not(:root)', { overflow: 'hidden' })

globalStyle('hr', {
  boxSizing: 'content-box',
  height: '0',
})

globalStyle('pre', { overflow: 'auto' })

globalStyle('code, kbd, pre, samp', { overflow: 'auto' })

globalStyle(`button, input, optgroup, select, textarea`, {
  color: 'inherit',
  font: 'inherit',
  margin: '0',
})

globalStyle('button', { overflow: 'visible', cursor: 'pointer' })
globalStyle(`button, select`, { textTransform: 'none' })

globalStyle(
  `button, html input[type='button'],
  input[type='reset'], input[type='submit']`,
  {
    padding: '0',
    margin: '0',
    background: 'none',
    border: '0',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
  },
)

globalStyle(`button[disabled], html input[disabled]`, {
  cursor: 'not-allowed',
})

globalStyle(`button::-moz-focus-inner, input::-moz-focus-inner`, {
  border: '0',
  padding: '0',
})

globalStyle(`input[type='checkbox'], input[type='radio']`, {
  boxSizing: 'border-box',
  padding: '0',
})

globalStyle(
  `input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button`,
  {
    height: 'auto',
  },
)

globalStyle(`input[type='search']`, {
  WebkitAppearance: 'textfield',
  boxSizing: 'border-box',
})

globalStyle(
  `input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration`,
  {
    WebkitAppearance: 'none',
  },
)

globalStyle('fieldset', {
  border: '0',
  margin: '0',
  padding: '0',
})

globalStyle('legend', {
  border: '0',
  padding: '0',
})

globalStyle('textarea', {
  overflow: 'auto',
})

globalStyle('optgroup', {
  fontWeight: 'bold',
})

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: '0',
})

globalStyle('td, th', {
  padding: '0',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  padding: '0',
  margin: '0',
})
