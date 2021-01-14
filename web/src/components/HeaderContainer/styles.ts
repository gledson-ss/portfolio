import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleHeaderContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`
export const Title = styled.p`
  font-size: 52px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1440px) {
    font-size: 42px;
  }
  @media (max-width: 1279px) {
    font-size: 32px;
  }
  @media (max-width: 719px) {
    font-size: 5.4vw;
  }
`

export const TitleDescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Description = styled.p`
  font-size: 14px;
  @font-face {
    font-family: open;
    src: url('/fonts/Open-sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.orange};
`
