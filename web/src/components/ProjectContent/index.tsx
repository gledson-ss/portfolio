import React from 'react'

import * as St from './styles'

interface projectProps {
  description: string
  image: string
  linkRepo: string
  name: string
}

const ProjectContent: React.FC<projectProps> = ({
  description,
  image,
  linkRepo,
  name
}) => {
  return (
    <St.Container>
      <St.GridContainer>
        <St.ImageBlock>
          <St.GitImage src={image} />
        </St.ImageBlock>

        <St.LinkBlock>
          <St.Link href={linkRepo} target="blank">
            <St.GithubIcon />
          </St.Link>
        </St.LinkBlock>
        <St.NameBlock>
          <St.BoxName>
            <St.ProjectName>{name}</St.ProjectName>
          </St.BoxName>
        </St.NameBlock>

        <St.DescriptionBlock>
          <St.Description>{description}</St.Description>
        </St.DescriptionBlock>
      </St.GridContainer>
    </St.Container>
  )
}

export default ProjectContent
