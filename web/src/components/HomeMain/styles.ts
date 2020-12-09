import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid red;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
`

export const PhotoContainerDesktop = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 128px;
`

export const PhotoContainerMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 35px;
`

export const ProfileImage = styled(Image)`
  border-radius: 8px;
`

export const ContainerVectorTextHomeDesktop = styled.div`
  display: grid;
  border: 1px solid red;
`

export const ContainerVectorTextHomeMobile = styled.div`
  display: grid;
  grid-template-columns: 175px 175px;
  grid-template-rows: 170px 170px;
  grid-template-areas:
    'a1 a1'
    'b1 b2';
  @media (min-width: 650px) {
    width: 58vw;
    height: 62vh;
    grid-template-columns: 29vw 29vw;
    grid-template-rows: 31vh 31vh;
  }
  width: 350px;
  height: 340px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 650px) {
    width: 58vw;
    height: 62vh;
  }
  width: 350px;
  height: 340px;
  grid-area: a1;
  position: absolute;
  padding-top: 10%;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  @font-face {
    font-family: Proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: Proza;
  @media (max-width: 767px) {
    font-size: 12px;
  }
  font-size: 50px;
`

export const VectorTextHomeDesktop = styled(Image)`
  @media (max-width: 767px) {
    display: none;
  }
`

export const VectorTextHomeMobile = styled(Image)`
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 650px) {
    width: 58vw;
    height: 62vh;
  }
  width: 350px;
  height: 340px;
`
