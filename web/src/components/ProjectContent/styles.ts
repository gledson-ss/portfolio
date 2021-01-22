import Image from 'next/image'
import { FaGithubAlt } from 'react-icons/fa'
import styled from 'styled-components'

interface containerProps {
  leftPosition: boolean
}

export const Container = styled.div<containerProps>`
  display: flex;
  justify-content: ${({ leftPosition }) =>
    leftPosition ? 'flex-start' : 'flex-end'};
  padding: 0 5vw;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 'ImageBlock LinkBlock' 'ImageBlock NameBlock' 'ImageBlock DescriptionBlock';
  grid-template-columns: auto 1fr;
  grid-template-rows: 10% 30% 60%;
`

export const ImageBlock = styled.div`
  grid-area: ImageBlock;
  height: 100%;
  padding: 0 1.2vw;
`
export const GitImage = styled(Image)``

export const InitialBlock = styled.div``

export const NameBlock = styled.div`
  grid-area: NameBlock;
  height: 100%;
  display: flex;
  align-items: center;
`

export const BoxName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -150px;
  padding: 1.5vh 1.5vw;
  background-color: ${({ theme }) => theme.colors.blue};
`
export const ProjectName = styled.p`
  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  font-size: 1.8vw;
`

export const Link = styled.link``

export const GithubIcon = styled(FaGithubAlt)`
  width: 1.2vw;
  height: 2.4vh;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const LinkBlock = styled.div`
  grid-area: LinkBlock;
  display: flex;
  align-items: flex-end;
`

export const DescriptionBlock = styled.div`
  grid-area: DescriptionBlock;
  width: 20vw;
`

export const Description = styled.p`
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
`
