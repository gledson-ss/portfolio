import React from 'react'

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
        <St.InfoContainer></St.InfoContainer>
      </St.ContactMenuContainer>
    </St.Container>
  )
}

export default Contact
