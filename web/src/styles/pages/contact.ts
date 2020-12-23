import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`
export const TopImageContainer = styled.div`
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
export const TopImage = styled(Image)`
  width: 378px;
  height: 200px;
`
export const ContactMessageContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18vh;
  border: 1px solid green;
`
export const MessageImageContainer = styled.div`
  /* border: 1px solid violet; */
  padding-right: 22px;
`

export const MessageImage = styled(Image)`
  width: 100px;
  height: 80px;
  /* border: 1px solid red; */
  margin-left: -10.5px;
`

export const MessageContainer = styled.div`
  padding-left: 22px;
`

export const Message = styled.p`
  font-size: 36px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
`
export const ContactMenuContainer = styled.main`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 30% 30% 40%;
`
export const InfoContainer = styled.div`
  display: flex;
  border: 1px solid red;
`
