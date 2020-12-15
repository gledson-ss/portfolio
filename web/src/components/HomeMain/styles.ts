import Image from 'next/image'
import styled from 'styled-components'

export const Main = styled.main`
  border: 4px solid purple;
  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 80px;
  @media (max-width: 767px) {
    height: 60vw;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px) {
    padding-right: 10%;
  }
  padding-right: 20%;
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
