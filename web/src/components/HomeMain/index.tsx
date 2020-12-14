import React from 'react'

import perfil from '../../assets/photos/perfil.png'
import vectorHome from '../../assets/vectors/Vector1.png'
import DescriptionBlock from '../DescriptionBlock'
import ProjectSeeButton from '../ProjectSeeButton'
import * as St from './styles'

const HomeMain: React.FC = () => {
  return (
    <St.Main>
      <St.Container>
        <St.ProfileContainer>
          <St.ProfilePhoto src={perfil} unsized={true} />
        </St.ProfileContainer>
        <DescriptionBlock />
      </St.Container>
    </St.Main>
  )
}

export default HomeMain
