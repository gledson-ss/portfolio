import React, { ButtonHTMLAttributes } from 'react'

import * as St from './styles'

interface props {
  info: string
}

type buttonProps = ButtonHTMLAttributes<string> & props

const ProjectSeeButton: React.FC<buttonProps> = ({ type, info }) => {
  return (
    <St.Container>
      <St.Button type={type}>
        <St.ButtonText>{info}</St.ButtonText>
      </St.Button>
    </St.Container>
  )
}

export default ProjectSeeButton
