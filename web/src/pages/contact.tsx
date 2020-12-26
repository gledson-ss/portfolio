import React from 'react'

import FormInput from '../components/FormInput'
import * as St from '../styles/pages/contact'
const Contact: React.FC = () => {
  return (
    <St.Container>
      <St.TopImageContainer>
        <St.TopImage src={'/vectors/Ellipse2.png'} unsized={true} />
      </St.TopImageContainer>
      <St.ContactMessageContainer>
        <St.MessageImageContainer>
          <St.MessageImage src={'/vectors/message.svg'} unsized={true} />
        </St.MessageImageContainer>
        <St.MessageContainer>
          <St.Message>Vamos manter contato!</St.Message>
        </St.MessageContainer>
      </St.ContactMessageContainer>
      <St.ContactMenuContainer>
        <St.InfoContainer>
          <St.BlockContaint>
            <St.TitleContainer>
              <St.Title>Meu e-mail</St.Title>
            </St.TitleContainer>
            <St.DescriptionContainer>
              <St.TextDescription>contato@gledson.dev</St.TextDescription>
            </St.DescriptionContainer>
          </St.BlockContaint>
          <St.BlockContaint>
            <St.TitleContainer>
              <St.Title>Whatsapp</St.Title>
            </St.TitleContainer>
            <St.DescriptionContainer>
              <St.TextDescription>+55 (83) 86296286</St.TextDescription>
            </St.DescriptionContainer>
          </St.BlockContaint>
          <St.BlockContaint>
            <St.TitleContainer>
              <St.Title>Minhas Redes sociais</St.Title>
            </St.TitleContainer>
            <St.DescriptionContainer>
              <St.IconContainer>
                <St.SocialIcon src={'/social/github.svg'} unsized={true} />
                <St.SocialIcon src={'/social/twitter.svg'} unsized={true} />
                <St.SocialIcon src={'/social/linkedin.svg'} unsized={true} />
                <St.SocialIcon src={'/social/instagram.svg'} unsized={true} />
              </St.IconContainer>
            </St.DescriptionContainer>
          </St.BlockContaint>
        </St.InfoContainer>
        <St.VectorContainer>
          <St.Vector src={'/vectors/shapeCenter.svg'} unsized={true} />
        </St.VectorContainer>
        <St.FormContainer>
          <FormInput />
        </St.FormContainer>
      </St.ContactMenuContainer>
      {/* <St.VectorFooterContainer>
        <St.VectorFooter src="/vectors/Ellipse3.svg" unsized={true} />
      </St.VectorFooterContainer> */}
    </St.Container>
  )
}

export default Contact
