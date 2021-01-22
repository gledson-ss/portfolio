import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styled from 'styled-components'

interface arrowContainerProps {
  side: string
}

export const Container = styled.div`
  display: flex;
  /* border: 4px solid blue; */
`

export const CarouselContainer = styled.div`
  /* border: 4px solid blue; */
`

export const CarouselVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 4px solid red; */
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border: 4px solid violet; */
`

export const Title = styled.p`
  font-size: 36px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: 1400px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    font-size: 22px;
  }
`
export const ArrowContainer = styled.div<arrowContainerProps>`
  width: 3.5vw;
  display: flex;
  justify-content: ${({ side }) =>
    side === 'right' ? 'flex-end' : 'flex-start'};

  @media (max-width: 767px) {
    width: 10vw;
  }
`

export const ArrowButton = styled.button`
  background-color: transparent;
  :focus {
    outline: none;
  }

  border: none;
`

export const ArrowLeftIcon = styled(FaAngleLeft)`
  width: 2.5vw;
  height: 6vh;

  color: ${({ theme }) => theme.colors.orange};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 5vw;
    margin-right: 10px;
  }
`
export const ArrowRightIcon = styled(FaAngleRight)`
  width: 2.5vw;
  height: 6vh;
  color: ${({ theme }) => theme.colors.orange};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 5vw;
    margin-left: 10px;
  }
`

export const VideoContainer = styled.div`
  /* border: 4px solid blue; */
`

export const Video = styled.iframe`
  width: 26vw;
  height: 30vh;
  border: 10px solid ${({ theme }) => theme.colors.blue};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 1280px) {
    width: 40vw;
    height: 35vh;
  }
  @media (max-width: 920px) {
    width: 50vw;
    height: 35vh;
  }
`
