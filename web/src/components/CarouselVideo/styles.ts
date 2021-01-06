import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 35vw;
  display: flex;
  flex-direction: column;
  /* border: 4px solid green; */
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

export const CarouselVideoContainer = styled.div`
  width: 100%;
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
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
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
export const ArrowContainer = styled.div`
  /* border: 4px solid violet; */
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
  @media (max-width: 767px) {
    width: 100%;
  }
`
