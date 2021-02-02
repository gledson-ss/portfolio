import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'a1 a1' 'controlImage carousel';
  /* border: 1px solid red; */
  @media (max-width: 1130px) {
    grid-template-areas: 'a1 a1' 'carousel carousel';
  }
  @media (min-width: 768px) {
    padding: 0 100px;
  }
`

export const DescriptionBlock = styled.div`
  grid-area: a1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* border: 1px solid red; */

  @media (max-width: 767px) {
    justify-content: flex-start;
    margin-bottom: 60px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`

export const TitleBlock = styled.p`
  font-size: 38px;

  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
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
  /* border: 1px solid red; */
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Description = styled.p`
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.black};
`

export const ImageContainer = styled.div`
  grid-area: controlImage;
  display: flex;
  justify-content: center;

  /* border: 1px solid red; */
  @media (max-width: 1280px) {
    justify-content: center;
  }
  @media (max-width: 1130px) {
    display: none;
  }
`

export const ControlImage = styled(Image)`
  width: 380px;
  height: 380px;
  @media (max-width: 767px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: 300px;
    height: 300px;
  }
`

export const CorouselContainer = styled.div`
  grid-area: carousel;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid blueviolet; */
`
