import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 68vw;
    height: 711px;
    border: 3px solid black;
  }
  @media (max-width: 767px) {
    position: relative;
  }
`
export const ImageContainer = styled.div``

export const backgroundImage = styled(Image)`
  @media (max-width: 767px) {
    position: absolute;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 60vw;
  }
  @media (min-width: 768px) {
    width: 814px;
    height: 711px;
    border: 1px solid red;
  }
`

export const InfoContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-areas:
    'text text'
    'option nada';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 70vw;
    height: 711px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-area: text;
`

export const Text = styled.p`
  @media (max-width: 767px) {
    font-size: 3vw;
  }

  @font-face {
    font-family: Proza;
    src: url('./fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: Proza;
`
