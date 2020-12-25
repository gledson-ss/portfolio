import React from 'react'

import Input from '../Input'
import Button from '../ProjectSeeButton'
import * as St from './styles'

const FormInput: React.FC = () => {
  function handleSubmit(data: any) {
    console.log(data)
  }
  return (
    <St.Form onSubmit={handleSubmit} action="mailto:contato@gledson.dev">
      <St.SectionInput>
        <St.TitleInputContainer>
          <St.TitleInput>Nome</St.TitleInput>
        </St.TitleInputContainer>
        <Input placeholder="Digite seu nome" />
      </St.SectionInput>
      <St.SectionInput>
        <St.TitleInputContainer>
          <St.TitleInput>E-mail</St.TitleInput>
        </St.TitleInputContainer>
        <Input placeholder="Digite seu email" type="email" name="from" />
      </St.SectionInput>
      <St.SectionInput>
        <St.TitleInputContainer>
          <St.TitleInput>Assunto</St.TitleInput>
        </St.TitleInputContainer>
        <Input
          placeholder="Qual assunto você quer tratar comigo?"
          name="subject"
        />
      </St.SectionInput>
      <St.SectionInput>
        <St.TitleInputContainer>
          <St.TitleInput>Mensagem</St.TitleInput>
        </St.TitleInputContainer>
        {/* <Input placeholder="Sua Mensagem" name="body" /> */}
        <St.TextArea placeholder="Sua mensagem" name="body"></St.TextArea>
      </St.SectionInput>

      <Button type="submit" />
    </St.Form>
  )
}

export default FormInput
