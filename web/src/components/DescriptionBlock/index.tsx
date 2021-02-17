import React from 'react'

import vector from '../../assets/vectors/Vector1.png'
import Button from '../ProjectSeeButton'
import * as St from './styles'

const DescriptionBlock: React.FC = () => {
  return (
    <St.Container>
      <St.ImageContainer>
        <St.backgroundImage src={vector} unsized={true}></St.backgroundImage>
      </St.ImageContainer>

      <St.InfoContainer>
        <St.TextContainer>
          <St.Text>Olá, meu nome é Gledson.</St.Text>
          <St.Text>Sou desenvolvedor fullstack</St.Text>
          <St.Text>Desenvolvo projetos na área</St.Text>
          <St.Text>de web e mobile, sempre</St.Text>
          <St.Text>buscando me atualizar sobre as</St.Text>
          <St.Text>tecnologias mais relevantes.</St.Text>
          <St.Text id="LineNextJs">
            Desenvolvi este site utilizando Next.js
          </St.Text>
        </St.TextContainer>

        <St.ButtonContainer>
          <Button info="Veja meus projetos" />
        </St.ButtonContainer>
      </St.InfoContainer>
    </St.Container>
  )
}

export default DescriptionBlock
