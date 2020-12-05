import React from 'react'

import perfil from '../../assets/photos/perfil.png'
import vectorHome from '../../assets/vectors/Vector1.png'
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

      <St.ContainerVectorTextHome>
        <St.VectorTextHomeMobile
          src={vectorHome}
          width={420}
          height={400}
        ></St.VectorTextHomeMobile>
        <St.VectorTextHomeDesktop
          src={vectorHome}
          width={840}
          height={711}
        ></St.VectorTextHomeDesktop>
      </St.ContainerVectorTextHome>
    </St.Container>
  )
}

export default HomeMain
