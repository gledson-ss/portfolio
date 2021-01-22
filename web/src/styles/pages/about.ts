import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div``

export const SkillsMusicContainer = styled.div`
  height: 149vh;
  position: relative;
  padding: 0 100px;
  /* border: 1px solid black; */
  @media (max-width: 767px) {
    padding: 0;
  }
`

export const SkillsMusicVectorContainer = styled.div`
  height: 70vh;
  right: 0;
  top: 30vh;
  position: absolute;
`

export const VectorRightSkillsMusicContainer = styled(Image)`
  width: 25vh;

  @media (max-width: 767px) {
    display: none;
  }
`

export const SkillsContainer = styled.div`
  height: 48vh; //48
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12vh;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
`
export const TitleDescriptionContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
  }
`
export const MusicContainer = styled.div`
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const GuitarContainer = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 80%;
  }
`

export const BlockGuitar = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid green; */
`

export const GuitarVectorContainer = styled.div``

export const GuitarVector = styled(Image)`
  width: 14vw;
  @media (max-width: 767px) {
    display: none;
  }
`

export const GuitarDescriptionContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const TitleBlockDescription = styled.div``

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

export const DescriptionBlockContainer = styled.div`
  width: 18vw;
  display: flex;
  margin-top: 16px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const DescriptionBlock = styled.p`
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.black};
`
export const MusicVideoSectionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`

export const SectionMusicContainer = styled.div`
  height: 77vh;
  position: relative;
  /* border: 1px solid violet; */
  margin-bottom: 40px;
`

export const LateralImageLeft = styled(Image)`
  width: 260px;
  height: 630px;
  position: absolute;
  top: 42vh;
  @media (max-width: 767px) {
    display: none;
  }
  /*  @media (max-width: 767px){
    width: 20px;
    height: 20px;
  } */
`

export const TopMusicContainer = styled.div`
  width: 100%;
  padding: 0 100px;
  position: absolute;
  top: 0;
  /* border: 1px solid red; */
  @media (max-width: 767px) {
    padding: 0;
  }
  @media (max-width: 1440px) {
    padding: 0 60px;
  }
`
export const TopMusicDescriptionContainer = styled.div`
  margin-top: 3vh;
  @media (max-width: 767px) {
    width: 100%;
  }
`
