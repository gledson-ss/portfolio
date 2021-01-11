import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'a1 a2' 'controlImage gamesImage';
  border: 3px solid black;
  @media (min-width: 768px) {
    padding: 0 100px;
  }
`

export const DescriptionBlock = styled.div`
  grid-area: a2;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const TitleBlock = styled.p`
  font-size: 38px;

  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1440px) {
    font-size: 32px;
  }
  @media (max-width: 1279px) {
    font-size: 26px;
  }
  @media (max-width: 719px) {
    font-size: 5.4vw;
  }
`
export const DescriptionContainer = styled.div`
  width: 18vw;
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
`

export const Description = styled.p`
  @font-face {
    font-family: open;
    src: url('/fonts/Open-sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.black};
`

export const ImageContainer = styled.div`
  grid-area: controlImage;
  display: flex;
  justify-content: center;
`

export const ControlImage = styled(Image)`
  width: 350px;
  height: 350px;
`

export const CorouselContainer = styled.div`
  grid-area: gamesImage;
  display: flex;
  justify-content: center;
  border: 1px solid blueviolet;
`
