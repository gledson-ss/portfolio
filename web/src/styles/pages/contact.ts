import Image from 'next/image'
import styled, { css } from 'styled-components'

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
  height: 16vh;
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
  color: ${({ theme }) => theme.colors.black};
`

export const ContactMenuContainer = styled.main`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  border: 1px solid red;
`

export const BlockContaint = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 2px solid blue;
`

export const TitleContainer = styled.div`
  display: flex;
  padding: 10px 0;
`

export const Title = styled.p`
  font-size: 24px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
`

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 3vh 0;
`

export const TextDescription = styled.p`
  font-size: 18px;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`

export const SocialIcon = styled(Image)`
  width: 30px;
  height: 30px;
`

export const VectorContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Vector = styled(Image)`
  @media (min-width: 1440px) {
    width: 450px;
    height: 450px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
