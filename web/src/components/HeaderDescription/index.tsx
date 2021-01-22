import React from 'react'

import * as St from './styles'

interface HeaderDescriptionProps {
  Title: string
  Description: string
}

const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  Title,
  Description
}) => {
  return (
    <St.Container>
      <St.TitleHeaderDescription>
        <St.Title>{Title}</St.Title>
      </St.TitleHeaderDescription>
      <St.TitleDescriptionContainer>
        <St.Description>{Description}</St.Description>
      </St.TitleDescriptionContainer>
    </St.Container>
  )
}

export default HeaderDescription
