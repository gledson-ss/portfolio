import Link from 'next/link'
import React, { ButtonHTMLAttributes } from 'react'

import * as St from './styles'
interface props {
  info: string
}

type buttonProps = ButtonHTMLAttributes<string> & props

const ProjectSeeButton: React.FC<buttonProps> = ({ type, info }) => {
  return (
    <St.Container>
      <Link href="/projects">
        <St.Button type={type}>
          <St.ButtonText>{info}</St.ButtonText>
        </St.Button>
      </Link>
    </St.Container>
  )
}

export default ProjectSeeButton
