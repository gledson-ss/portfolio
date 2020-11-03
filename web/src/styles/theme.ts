interface colorProps {
  background: string
}

interface themeProps {
  colors: colorProps
}

const theme: themeProps = {
  colors: {
    background: 'black'
  }
}

export default theme
