/* import prozaLibreMedium from '../assets/fonts/proza-libre/ProzaLibre-Medium.ttf' */

interface typeColor {
  orange: string
  blue: string
  gray: string
  darkGray: string
  black: string
  white: string
}

interface colorTheme {
  colors: typeColor
}

const theme: colorTheme = {
  colors: {
    orange: '#FC7C1C',
    blue: '#DAE7FF',
    gray: '#6F6F6F',
    darkGray: '#434343',
    black: '#151515',
    white: '#FFFFFF'
  }
}
export type ThemeType = typeof theme

export default theme
