import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
