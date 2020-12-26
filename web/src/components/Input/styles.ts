import styled, { css } from 'styled-components'

const borders = css`
  border: 1px solid #6f6f6f;
  box-sizing: border-box;
  border-radius: 10px;
`

export const Container = styled.input`
  display: flex;
  width: 100%;
  height: 5.2vh;
  padding-left: 16px;
  ${borders}

  color: ${({ theme }) => theme.colors.orange};
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  font-size: 1vw;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.orange};
  }
  overflow-y: scroll;
`
