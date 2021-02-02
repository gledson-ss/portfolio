import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;

  @media (max-width: 720px) {
    padding: 0;
  }
`
export const TopImageContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: -1;
`
export const TopImage = styled(Image)`
  width: 280px;
  height: 200px;
`
export const ContactMessageContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 13vh;

  @media (max-width: 719px) {
    height: 10vh;
    justify-content: center;
  }
  /* border: 1px solid violet; */
`
export const MessageImageContainer = styled.div`
  /* border: 1px solid violet; */
  padding-right: 22px;
  @media (max-width: 719px) {
    padding-right: 0;
  }
`

export const MessageImage = styled(Image)`
  width: 100px;
  height: 80px;
  margin-left: -10.5px;
  @media (max-width: 1440px) {
    width: 85px;
    height: 62px;
  }
  @media (max-width: 1279px) {
    width: 70px;
    height: 52px;
  }
  @media (max-width: 719px) {
    width: 60px;
  }
`

export const MessageContainer = styled.div`
  padding-left: 22px;
  /* border: 1px solid violet; */
`

export const Message = styled.p`
  font-size: 36px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1440px) {
    font-size: 28px;
  }
  @media (max-width: 1279px) {
    font-size: 24px;
  }
  @media (max-width: 719px) {
    font-size: 5.4vw;
  }
`

export const ContactMenuContainer = styled.main`
  height: 63vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* border: 1px solid black; */
  @media (max-width: 719px) {
    display: flex;
    justify-content: center;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
`

export const BlockContaint = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* border: 1px solid green; */
`

export const TitleContainer = styled.div`
  display: flex;
  padding: 10px 0;
  @media (max-width: 719px) {
    justify-content: center;
  }
`

export const Title = styled.p`
  font-size: 24px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 1440px) {
    font-size: 20px;
  }
  @media (max-width: 719px) {
    font-size: 5.4vw;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 3vh 0;
  @media (max-width: 719px) {
    justify-content: center;
  }
`

export const TextDescription = styled.p`
  font-size: 18px;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.darkGray};
  @media (max-width: 1440px) {
    font-size: 14px;
  }
  @media (max-width: 719px) {
    font-size: 4vw;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 719px) {
    width: 100%;
    justify-content: space-evenly;
  }
`

export const SocialIcon = styled(Image)`
  width: 30px;
  height: 30px;

  @media (max-width: 1440px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 1220px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 719px) {
    width: 25px;
    height: 25px;
  }
`

export const VectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Vector = styled(Image)`
  @media (min-width: 1001px) {
    width: 220px;
    height: 220px;
  }
  @media (min-width: 1200px) {
    width: 340px;
    height: 340px;
  }
  @media (min-width: 1440px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const FormContainer = styled.div`
  display: flex;

  align-items: flex-end;
  flex-direction: column;

  height: 63vh;
`

export const VectorFooterContainer = styled.div`
  margin-left: -100px;
  height: 14vh;
  position: relative;

  @media (max-width: 676px) {
    display: none;
  }
`
export const VectorFooter = styled(Image)`
  width: 200px;
  height: 200px;
  bottom: 0;
  z-index: -1;
  position: absolute;
`

export const Link = styled.a``
