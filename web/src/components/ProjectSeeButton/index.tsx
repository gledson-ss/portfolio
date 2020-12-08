import React from 'react'

import * as St from './styles'

const ProjectSeeButton: React.FC = () => {
  return (
    <St.Container>
      <St.Button onClick={() => console.log('clicou')}>
        <St.ButtonText>Veja meus projetos</St.ButtonText>
      </St.Button>
    </St.Container>
  )
}

export default ProjectSeeButton
