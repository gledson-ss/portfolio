import { FaGithubAlt } from 'react-icons/fa'
import styled from 'styled-components'

interface containerProps {
  leftPosition: boolean
}

export const Container = styled.div<containerProps>`
  display: flex;
  justify-content: ${({ leftPosition }) =>
    leftPosition ? 'flex-start' : 'flex-end'};
  padding: 80px 5vw;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 'ImageBlock LinkBlock' 'ImageBlock NameBlock' 'ImageBlock DescriptionBlock';
  grid-template-columns: auto 1fr;
  grid-template-rows: 10% 30% 60%;

  border: 1px solid red;
  @media (max-width: 767px) {
    grid-template-areas: 'ImageBlock LinkBlock' 'NameBlock NameBlock' 'DescriptionBlock DescriptionBlock';
    grid-template-rows: 40% 10% 50%;
    height: 450px;
  }
  @media (min-width: 1280px) {
    width: 70%;
  }
`

export const ImageBlock = styled.div`
  grid-area: ImageBlock;
  padding: 0 1.2vw;

  @media (max-width: 767px) {
    padding: 0;
  }
`

export const GitImage = styled.img`
  width: 400px;
  height: 250px;

  @media (max-width: 767px) {
    width: 350px;
    height: 100%;
  }

  @media (max-width: 420px) {
    width: 280px;
    height: 100%;
  }
`

export const InitialBlock = styled.div``

export const NameBlock = styled.div`
  grid-area: NameBlock;
  display: flex;
  align-items: center;
  border: 1px solid blue;
  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const BoxName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -150px;
  padding: 1.5vh 1.5vw;
  background-color: ${({ theme }) => theme.colors.blue};
  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
  }
`

export const ProjectName = styled.p`
  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  font-size: 1.6vw;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const Link = styled.a``

export const GithubIcon = styled(FaGithubAlt)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const LinkBlock = styled.div`
  grid-area: LinkBlock;
  display: flex;
  align-items: center;
  border: 3px solid green;

  @media (max-width: 767px) {
    align-items: flex-start;
    justify-content: center;
  }
`

export const DescriptionBlock = styled.div`
  grid-area: DescriptionBlock;
  border: 1px solid violet;
`

export const Description = styled.p`
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
