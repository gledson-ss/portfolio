import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const Button = styled.button`
  :focus {
    outline: none;
  }
  border: none;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.orange};
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));
  @media (min-width: 768px) {
    width: 14vw;
    height: 2.8vw;
  }

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
  @media (min-width: 767px) {
    font-size: 1vw;
  }
  @font-face {
    font-family: openSans;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: openSans;
`
