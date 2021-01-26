import React, { useState } from 'react'

import Footer from '../components/Footer'
import HeaderDescription from '../components/HeaderDescription'
import ProjectContent from '../components/ProjectContent'
import * as St from '../styles/pages/projects'
import ProjectsInfo from '../utils/projects.json'

const Projects: React.FC = () => {
  const [array, setArray] = useState(Object.entries(ProjectsInfo))
  const [arraySize, setArraySize] = useState<number>(2)
  function handleGrowUpArray() {
    if (arraySize < array.length) {
      setArraySize(arraySize + 1)
    }
  }
  return (
    <St.Container>
      <St.HeaderDescriptionContainer>
        <HeaderDescription
          Title="Projetos"
          Description="Projetos que desenvolvi ao longo do tempo"
        />
      </St.HeaderDescriptionContainer>
      <St.ProjectsBlock>
        {array.slice(0, arraySize).map((e, index) => {
          return (
            <ProjectContent
              key={index}
              name={e[1].name}
              image={e[1].image}
              linkRepo={e[1].linkRepo}
              description={e[1].description}
              position={e[1].position}
            />
          )
        })}
      </St.ProjectsBlock>
      <St.ButtonContainer>
        <St.Button onClick={() => handleGrowUpArray()}>
          <St.Text id="text">Carregar mais</St.Text>
        </St.Button>
      </St.ButtonContainer>
      <Footer />
    </St.Container>
  )
}

export default Projects
