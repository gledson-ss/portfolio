import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  border: 1px solid yellow;
`
export const ImageContainer = styled.div``

export const backgroundImage = styled(Image)`
  position: absolute;
  left: 0;
  @media (max-width: 480px) {
    width: 100%;
    height: 60vw;
  }
`

export const InfoContainer = styled.div`
  display: grid;
  border: 1px solid orange;
  grid-template-areas:
    'text text'
    'option nada';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 100%;
  position: relative;
`
export const TextContainer = styled.div`
  border: 1px solid black;
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
