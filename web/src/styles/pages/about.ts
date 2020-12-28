import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div``

export const InitialContainer = styled.div`
  height: 90vh;
  display: grid;
  grid-template-areas:
    'InformationBlock BlockImage'
    'BottomVector BottomVector';
  grid-template-columns: 60% 40%;
  grid-template-rows: 70vh 20vh;
  padding: 0 100px;
  @media (max-width: 767px) {
    grid-template-areas:
      'InformationBlock InformationBlock'
      'BottomVector BottomVector';
    grid-template-columns: 1fr;
    padding: 0;
  }
`

export const InformationBlock = styled.div`
  grid-area: InformationBlock;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const TextContainer = styled.div`
  padding: 0 100px;
  @media (max-width: 767px) {
    padding: 0 30px;
    margin: 0;
  }
  /* border: 1px solid red; */
`

export const Text = styled.p`
  @font-face {
    font-family: Open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: Open;
  font-size: 1.2vw;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const VectorContainer = styled.div`
  position: absolute;
  z-index: -1;
`

export const Vector = styled(Image)`
  width: 20vw;
  @media (max-width: 767px) {
    width: 40vw;
  }
`

export const PhotoContainer = styled.div`
  grid-area: BlockImage;
  /* border: 1px solid blue; */
`

/* export const MoreSeeButtonContainer = styled.div`
  grid-area: ButtonContainer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
`

export const Button = styled.button`
  :focus {
    outline: none;
  }
  border: 1px solid orange;
  width: 15vw;
  height: 4.5vh;
` */

export const BottomVectorInitialContainer = styled.div`
  grid-area: BottomVector;

  margin: 0 -100px;
  @media (max-width: 767px) {
    margin: 0;
  }
`

export const BottomVector = styled(Image)`
  width: 100%;
  height: 19vh;
`
