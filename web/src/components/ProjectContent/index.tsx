import React, { useState } from 'react'

import * as St from './styles'

const ProjectContent: React.FC = () => {
  const [leftPositionContainer, setLeftPositionContainer] = useState<boolean>(
    true
  )

  return (
    <St.Container leftPosition={leftPositionContainer}>
      <St.GridContainer>
        <St.ImageBlock>
          <div
            style={{
              width: '424px',
              height: '330px',
              backgroundColor: 'yellow'
            }}
          ></div>
        </St.ImageBlock>

        <St.LinkBlock>
          <St.GithubIcon />
        </St.LinkBlock>
        <St.NameBlock>
          <St.BoxName>
            <St.ProjectName>Nome do projeto</St.ProjectName>
          </St.BoxName>
        </St.NameBlock>

        <St.DescriptionBlock>
          <St.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, sit ac
            nunc integer. Tempus at nunc euismod massa sem tellus. Morbi
            maecenas volutpat morbi a ultrices pretium ac. Odio tincidunt sem
            fringilla aliquam nibh. Ut molestie volutpat id enim quis nulla
            porttitor pulvinar.
          </St.Description>
        </St.DescriptionBlock>
      </St.GridContainer>
    </St.Container>
  )
}

export default ProjectContent
