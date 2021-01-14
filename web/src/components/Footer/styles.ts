import Image from 'next/image'
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineInstagram
} from 'react-icons/ai'
import { IoLogoLinkedin } from 'react-icons/io'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: -100px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ImageContainer = styled.div`
  /* border: 2px solid blue; */
`

export const ImageBackground = styled(Image)`
  margin-bottom: -3px;
  width: 100%;
`

export const OptionContainer = styled.div`
  width: 100%;
  height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  padding: 0 100px;

  @media (max-width: 1280px) {
    height: 16vh;
  }
  @media (max-width: 1000px) {
    padding: 0;
  }
`
export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const InfoBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const SocialMediaBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a``

export const GithubIcon = styled(AiFillGithub)`
  width: 5vw;
  height: 5vh;
  color: ${({ theme }) => theme.colors.darkGray};

  @media (max-width: 1280px) {
    width: 4vw;
    height: 4vh;
  }
`
export const TwitterIcon = styled(AiFillTwitterSquare)`
  width: 5vw;
  height: 5vh;
  color: ${({ theme }) => theme.colors.darkGray};
  @media (max-width: 1280px) {
    width: 4vw;
    height: 4vh;
  }
`
export const LinkedinIcon = styled(IoLogoLinkedin)`
  width: 5vw;
  height: 5vh;
  color: ${({ theme }) => theme.colors.darkGray};
  @media (max-width: 1280px) {
    width: 4vw;
    height: 4vh;
  }
`
export const InstagranIcon = styled(AiOutlineInstagram)`
  width: 5vw;
  height: 5vh;
  color: ${({ theme }) => theme.colors.darkGray};
  @media (max-width: 1280px) {
    width: 4vw;
    height: 4vh;
  }
`

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TitleBlockContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
`

export const TitleBlock = styled.p`
  font-size: 1.3vw;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.black};
`

export const DescriptionBlockContainer = styled.div`
  height: 100%;
  display: flex;
  padding-top: 5px;
`

export const DescriptionBlock = styled.p`
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.darkGray};
`

export const WhatsappBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AuthorBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
