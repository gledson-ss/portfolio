import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    /* border: 4px solid black; */
    padding-top: 40px;
  }
  @media (max-width: 767px) {
    position: relative;
  }
  @media (min-width: 1440px) {
    padding-top: 80px;
  }
`
export const ImageContainer = styled.div``

export const backgroundImage = styled(Image)`
  @media (max-width: 480px) {
    width: 100%;
    height: 60vw;
  }
  @media (max-width: 767px) {
    position: absolute;
  }

  @media (min-width: 768px) {
    width: 44vw;
    height: 67vh;
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
  @media (min-width: 768px) {
    position: absolute;
    width: 44vw;
    height: 67vh;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const TextContainer = styled.div`
  grid-area: text;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
  #LineNextJs {
    padding-top: 10px;
    font-style: italic;
  }
`

export const Text = styled.p`
  @media (max-width: 767px) {
    font-size: 3vw;
  }
  @media (min-width: 768px) {
    font-size: 1.6vw;
  }
  @font-face {
    font-family: Proza;
    src: url('./fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: Proza;
`
export const ButtonContainer = styled.div`
  grid-area: option;
`

export const Link = styled.a`
  text-decoration: none;
`
