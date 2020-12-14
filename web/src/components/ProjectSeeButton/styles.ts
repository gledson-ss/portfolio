import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  grid-area: option;
`

export const Button = styled.button`
  :focus {
    outline: none;
  }
  border: none;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.orange};
  @media (max-width: 767px) {
    width: 26vw;
    height: 6.5vw;
  }
  cursor: pointer;
`

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 767px) {
    font-size: 2.2vw;
  }

  @font-face {
    font-family: openSans;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: openSans;
`
