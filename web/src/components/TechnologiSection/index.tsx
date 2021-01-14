import React from 'react'

import TechnologyCard from '../TechnologyCard'
import * as St from './styles'
const TechnologiSection: React.FC = () => {
  return (
    <St.Container>
      <St.TechnologiesBlock>
        <TechnologyCard
          tech="React"
          placeUtilized="Projetos Web, Desktop e Mobile"
        />
        <TechnologyCard tech="ReactNative" placeUtilized="Projetos Mobile" />
        <TechnologyCard
          tech="Typescript"
          placeUtilized="Projetos com Javascript"
        />
        <TechnologyCard
          tech="Javascript"
          placeUtilized="Projetos Web, Desktop, servidor, Mobile e etc"
        />
        <TechnologyCard tech="NextJs" placeUtilized="projetos Web" />
        <TechnologyCard tech="NodeJs" placeUtilized="Projetos com Javascript" />
        <TechnologyCard
          tech="ElectronJs"
          placeUtilized="Projetos para App Desktop"
        />
        <TechnologyCard
          tech="VsCode"
          placeUtilized="Meu Editor de Código Principal"
        />
        <TechnologyCard tech="Java" placeUtilized="Projetos em Deskop" />
        <TechnologyCard
          tech="Python"
          placeUtilized="Análise de Dados e Estatística"
        />
        <TechnologyCard
          tech="Cplusplus"
          placeUtilized="Projetos em Automação, Sistema Embarcados"
        />
        <TechnologyCard
          tech="C"
          placeUtilized="Projetos em Automação, Sistema Embarcados"
        />
        <TechnologyCard
          tech="Mysql"
          placeUtilized="Voltado para Banco de Dados"
        />
        <TechnologyCard
          tech="Sqlite"
          placeUtilized="Voltado para Banco de Dados"
        />
      </St.TechnologiesBlock>
    </St.Container>
  )
}

export default TechnologiSection
