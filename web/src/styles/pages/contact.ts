import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const topImageContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: -1;
`
export const topImage = styled(Image)`
  width: 278px;
  height: 180px;
`
