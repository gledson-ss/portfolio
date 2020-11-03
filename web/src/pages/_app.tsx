import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
