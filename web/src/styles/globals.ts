import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html, body {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
`
