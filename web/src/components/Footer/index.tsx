import React from 'react'

import ScreenMoveButton from '../ScreenMoveButton'
import * as St from './styles'
const Footer: React.FC = () => {
  return (
    <St.Container>
      <St.ImageContainer>
        <St.ImageBackground src={'/vectors/footer2.png'} unsized={true} />
      </St.ImageContainer>
      <St.OptionContainer>
        <St.ButtonBlock>
          <ScreenMoveButton />
        </St.ButtonBlock>
        <St.InfoBlock>
          <St.SocialMediaBlock>
            <St.Link href="https://github.com/gledson-ss" target="blank">
              <St.GithubIcon />
            </St.Link>
            <St.Link href="https://twitter.com/gledsonDev" target="blank">
              <St.TwitterIcon />
            </St.Link>
            <St.Link
              href="https://www.linkedin.com/in/gledson-santos-de-souza-abb096196/"
              target="blank"
            >
              <St.LinkedinIcon />
            </St.Link>
            <St.Link
              href="https://www.instagram.com/gledson.js/"
              target="blank"
            >
              <St.InstagranIcon />
            </St.Link>
          </St.SocialMediaBlock>
          <St.ContactBlock>
            <St.TitleBlockContainer>
              <St.TitleBlock>Contato</St.TitleBlock>
            </St.TitleBlockContainer>
            <St.DescriptionBlockContainer>
              <St.DescriptionBlock>ola@gledson.dev</St.DescriptionBlock>
            </St.DescriptionBlockContainer>
          </St.ContactBlock>
          <St.WhatsappBlock>
            <St.TitleBlockContainer>
              <St.TitleBlock>Whatsapp</St.TitleBlock>
            </St.TitleBlockContainer>
            <St.DescriptionBlockContainer>
              <St.DescriptionBlock>+55 (83) 86296286</St.DescriptionBlock>
            </St.DescriptionBlockContainer>
          </St.WhatsappBlock>
          <St.AuthorBlock>
            <St.TitleBlock>Desenvolvido por Gledson Santos.</St.TitleBlock>
          </St.AuthorBlock>
        </St.InfoBlock>
      </St.OptionContainer>
    </St.Container>
  )
}

export default Footer
