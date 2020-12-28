/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />
import { ThemeType } from './src/styles/theme'

declare module 'styled-components'{
  export interface DefaultTheme extends ThemeType
}
