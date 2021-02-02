import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  height: 70vh;
  display: flex;
  padding: 0 100px;
  /* border: 1px solid red; */
  @media (max-width: 767px) {
    padding: 0;
  }
`
export const InformationBlock = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 1280px) {
    width: 40vw;
  }
  @media (max-width: 767px) {
    width: 100%;
    align-items: flex-start;
  }
`
export const TextContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 30px;
    margin: 0;
  }
`

export const Text = styled.p`
  @font-face {
    font-family: Open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: Open;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.02vw;

  @media (max-width: 767px) {
    font-size: 2.5vw;
  }
  @media (max-width: 400px) {
    font-size: 3vw;
  }
`

export const VectorContainer = styled.div`
  position: absolute;
  z-index: -1;
  @media (max-width: 767px) {
    display: none;
  }
`

export const Vector = styled(Image)`
  @media (max-width: 500px) {
    width: 50vw;
  }
  @media (max-width: 767px) {
    width: 40vw;
  }
  @media (max-width: 1280px) {
    width: 30vh;
  }
  @media (min-width: 1281px) {
    height: 48vh;
  }
`
