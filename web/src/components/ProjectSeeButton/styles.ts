import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 15%;
  grid-area: b1;
`

export const Button = styled.button`
  :focus {
    outline: none;
  }
  border: none;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.orange};
  width: min(20vw, 197px);
  height: 56px;
  @media (max-width: 767px) {
    height: 38px;
  }
  cursor: pointer;
`

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 767px) {
    font-size: 13px;
  }
  font-size: 18px;
  @font-face {
    font-family: openSans;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: openSans;
`
