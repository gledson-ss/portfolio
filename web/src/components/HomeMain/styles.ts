import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
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

export const ContainerVectorTextHome = styled.div``
export const VectorTextHomeDesktop = styled(Image)`
  @media (max-width: 767px) {
    display: none;
  }
`
export const VectorTextHomeMobile = styled(Image)`
  @media (min-width: 768px) {
    display: none;
  }
  border: 1px solid red;
`
