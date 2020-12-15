import Image from 'next/image'
import styled from 'styled-components'

export const Main = styled.main`
  @media (min-width: 768px) {
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 767px) {
    height: 60vw;
    margin-top: 80px;
  }
  /* border: 5px solid green; */
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    padding-right: 10%;
  }

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-right: 10%;
  }

  @media (min-width: 1440px) {
    padding-top: 90px;
  }
`

export const ProfilePhoto = styled(Image)`
  @media (min-width: 768px) {
    width: 13vw;
    height: 16vw;
    border-radius: 10px;
  }

  @media (max-width: 767px) {
    width: 20vw;
    border-radius: 100%;
  }
  @media (max-width: 330px) {
    width: 60px;
  }
`
