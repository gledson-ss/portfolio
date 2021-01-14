import React from 'react'

import * as St from './styles'

interface HeaderContainerProps {
  Title: string
  Description: string
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  Title,
  Description
}) => {
  return (
    <St.Container>
      <St.TitleHeaderContainer>
        <St.Title>{Title}</St.Title>
      </St.TitleHeaderContainer>
      <St.TitleDescriptionContainer>
        <St.Description>{Description}</St.Description>
      </St.TitleDescriptionContainer>
    </St.Container>
  )
}

export default HeaderContainer
