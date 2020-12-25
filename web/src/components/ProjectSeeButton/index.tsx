import React, { ButtonHTMLAttributes } from 'react'

import * as St from './styles'

type buttonProps = ButtonHTMLAttributes<string>

const ProjectSeeButton: React.FC<buttonProps> = ({ type }) => {
  return (
    <St.Container>
      <St.Button type={type}>
        <St.ButtonText>Veja meus projetos</St.ButtonText>
      </St.Button>
    </St.Container>
  )
}

export default ProjectSeeButton
