import React from 'react'

import perfil from '../../assets/photos/perfil.png'
import vectorHome from '../../assets/vectors/Vector1.png'
import ProjectSeeButton from '../ProjectSeeButton'
import * as St from './styles'

const HomeMain: React.FC = () => {
  return (
    <St.Container>
      <St.PhotoContainerDesktop>
        <St.ProfileImage src={perfil} width={300} height={360} />
      </St.PhotoContainerDesktop>
      <St.PhotoContainerMobile>
        <St.ProfileImage src={perfil} width={200} height={260} />
      </St.PhotoContainerMobile>
      <St.ContainerVectorTextHomeMobile>
        <St.TextContainer>
          <St.Text>um dois tres</St.Text>
          <St.Text>um dois tres</St.Text>
        </St.TextContainer>
        <St.VectorTextHomeMobile src={vectorHome} unsized={true} />
        <ProjectSeeButton />
      </St.ContainerVectorTextHomeMobile>
      <St.ContainerVectorTextHomeDesktop>
        <St.VectorTextHomeDesktop src={vectorHome} unsized={true} />
      </St.ContainerVectorTextHomeDesktop>
    </St.Container>
  )
}

export default HomeMain
