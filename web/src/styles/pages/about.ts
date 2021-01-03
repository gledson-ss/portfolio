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
    grid-template-rows: 60vh 30vh;
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
`

export const Text = styled.p`
  @font-face {
    font-family: Open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: Open;
  font-size: 1.2vw;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
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
  @media (max-width: 500px) {
    width: 50vw;
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
  @media (max-width: 767px) {
    height: 29vh;
  }
`

export const SkillsMusicContainer = styled.div`
  height: 100vh;
  position: relative;
  padding: 0 100px;
  border: 1px solid black;
  @media (max-width: 767px) {
    padding: 0;
  }
`

export const SkillsMusicVectorContainer = styled.div`
  height: 100vh;
  right: 0;
  top: 25vh;
  position: absolute;
`

export const VectorRightSkillsMusicContainer = styled(Image)`
  width: 25vh;

  @media (max-width: 767px) {
    display: none;
  }
`

export const SkillsContainer = styled.div`
  height: 43vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid blue;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
`

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
`

export const TitleHeaderContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Title = styled.p`
  font-size: 36px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1440px) {
    font-size: 28px;
  }
  @media (max-width: 1279px) {
    font-size: 24px;
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

export const TechnologiesContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;

  @media (max-width: 767px) {
    overflow: scroll;
  }
`
export const TechnologiesBlock = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
