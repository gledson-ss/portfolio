import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 80px;
    height: 60vw;
    border: 1px solid blue;
  }
`
export const Main = styled.main``

export const ProfileContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    padding-right: 10%;
  }
`

export const ProfilePhoto = styled(Image)`
  @media (max-width: 767px) {
    width: 20vw;
    border-radius: 100%;
  }
  @media (max-width: 330px) {
    width: 60px;
  }
`
