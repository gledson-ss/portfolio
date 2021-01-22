import React from 'react'

import Footer from '../components/Footer'
import HeaderDescription from '../components/HeaderDescription'
import ProjectContent from '../components/ProjectContent'
import * as St from '../styles/pages/projects'
import ProjectsInfo from '../utils/projects.json'

const Projects: React.FC = () => {
  return (
    <St.Container>
      <St.HeaderDescriptionContainer>
        <HeaderDescription
          Title="Projetos"
          Description="Projetos que desenvolvi ao longo do tempo"
        />
      </St.HeaderDescriptionContainer>
      <St.ProjectsBlock>
        <ProjectContent />
      </St.ProjectsBlock>
      <Footer />
    </St.Container>
  )
}

export default Projects
